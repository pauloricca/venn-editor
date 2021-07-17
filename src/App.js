import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Viewer from './components/ui/Viewer';
import schemas from './components/views/Schemas';
import dummyData from './dummydata';
import Editor from './components/ui/Editor';
import './App.scss';

const API_AUTHORISATION_CODE = '2133';

function App({useDummyData, useData}) {

  const [viewData, setViewData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedViewId, setSelectedViewId] = useState('');
  
  // Do we have data coming from props? if so, use it
  if(!dataLoaded && useData) {
    setViewData(preProcessData(useData));
    setDataLoaded(true);
  }

  // when a certain field value changes
  function onDataChange(moduleIndex, fieldName, value) {
    let newData = [...viewData];
    // support for second level attributes e.g. link.type
    if(fieldName.indexOf('.') !== -1)
    {
        const fieldNameParts = fieldName.split('.');
        newData[moduleIndex].attributes[fieldNameParts[0]][fieldNameParts[1]] = value;
    }
    else newData[moduleIndex].attributes[fieldName] = value;
    setViewData(newData);
  }

  // Removing a view
  function onViewRemove(moduleIndex) {
    let newData = [...viewData];
    newData.splice(moduleIndex, 1);
    setViewData(newData);
  }

  // Add new view
  function onAddNew(moduleType) {
    let newView = {"moduleType": moduleType, "attributes": {}};
    // assign new id
    newView.id = uuidv4();
    // set defaults
    schemas[moduleType].fields.forEach(field => {
      if(field.default) newView.attributes[field.name] = field.default;
    });
    const newData = [...viewData, newView];
    setViewData(newData);
  }

  function onSelectView(viewId) {
    setSelectedViewId(viewId);
  }

  // Save data
  async function onSave() {
    const processedData = await postProcessData(viewData);
    const dataToSave = JSON.stringify(processedData);
    fetch('/json', { 
        method: 'POST',
        headers: new Headers({
          'Authorization': API_AUTHORISATION_CODE,
          'Content-Type': 'application/json'
        }),
        body: dataToSave
      })
      .then(res => {
        if(res.ok) {
          alert('Data saved');
        }
        else
        {
          alert('Error saving data');
        }
      })
  }

  // Prepares data for using in the editor
  function preProcessData(data) {
    // Add ids to be used as keys on lists
    data.forEach((item) => item.id = uuidv4());
    return data;
  }

  // prepares data for upload
  async function postProcessData(data) {
    // Remove ids
    let dataCopy = JSON.parse(JSON.stringify(data))
    for(const item of dataCopy) {
      // remove editor-related vars
      delete item.id;
      delete item.selected;
      delete item.chosen;
      // check if any post processing needs to be done
      if(schemas[item.moduleType].postProcess) {
        await schemas[item.moduleType].postProcess(item);
      }
    }
    return dataCopy;
  }

  // Load Data
  useEffect( () => {
    if(!dataLoaded) {
      if(useDummyData) {
        setViewData(preProcessData(dummyData)); 
        setDataLoaded(true); 
      } else {
        fetch('/json', { 
          headers: new Headers({
            'Authorization': API_AUTHORISATION_CODE
          }) 
        })
        .then(res => {
          if(res.ok) {
            try {
              return res.json();
            } catch(err) {
              console.log('error parsing api response', err);
            }
          }
        })
        .then( 
          jsonRes => { 
            setViewData(preProcessData(jsonRes)); 
            setDataLoaded(true); 
          }
        );
      }
    }
  }, [dataLoaded,useDummyData]);

  if(dataLoaded) return (
    <div className="App" data-testid="app">
        <Viewer 
          views={viewData} 
          onNewData={setViewData} 
          onSelect={onSelectView}
          selectedViewId={selectedViewId}
        />
        <Editor 
          views={viewData} 
          schemas={schemas} 
          onNewData={setViewData} 
          onChange={onDataChange} 
          onAddNew={onAddNew} 
          onRemove={onViewRemove} 
          onSave={onSave}
          onSelect={onSelectView}
          selectedViewId={selectedViewId}
        />
    </div>
  );
  else return <div className="loading">Loading...</div>;
}

export default App;