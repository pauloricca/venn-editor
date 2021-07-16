import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import Viewer from './components/ui/Viewer';
import schemas from './schemas';
import dummyData from './dummydata';
import Editor from './components/ui/Editor';

const API_AUTHORISATION_CODE = '2133';
const USE_DUMMY_DATA = false;

function App() {

  const [viewData, setViewData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

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

  function onViewRemove(moduleIndex) {
    const confirmed = window.confirm("Are you sure you want to remove this element?");
    if(confirmed) {
      let newData = [...viewData];
      newData.splice(moduleIndex, 1);
      setViewData(newData);
    }
  }

  function onAddNew(moduleType) {
    let newData = [...viewData, {"moduleType": moduleType, "attributes": {}}];
    setViewData(newData);
  }

  // Save data
  function onSave() {
    fetch('/json', { 
        method: 'POST',
        headers: new Headers({
          'Authorization': API_AUTHORISATION_CODE,
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(postProcessData(viewData)) 
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

  function preProcessData(data) {
    // Add ids to be used as keys on lists
    data.forEach((item) => item.id = uuidv4());
    return data;
  }

  function postProcessData(data) {
    // Remove ids
    let dataCopy = JSON.parse(JSON.stringify(data))
    dataCopy.forEach((item) => {
      delete item.id;
      delete item.selected;
      delete item.chosen;
      if(schemas[item.moduleType].postProcess) {
        schemas[item.moduleType].postProcess(item);
      }
    });
    return dataCopy;
  }

  // Load Data
  useEffect( () => {
    if(!dataLoaded) {
      if(USE_DUMMY_DATA) {
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
  }, [dataLoaded]);

  if(dataLoaded) return (
    <div className="App">
        <Viewer views={viewData} onNewData={setViewData} />
        <Editor views={viewData} schemas={schemas} onNewData={setViewData} onChange={onDataChange} onAddNew={onAddNew} onRemove={onViewRemove} onSave={onSave}/>
    </div>
  ); else return null;
}

export default App;