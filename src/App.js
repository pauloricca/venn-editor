import { useState, useEffect } from 'react';
import './App.scss';
import Viewer from './components/ui/Viewer';

const API_AUTHORISATION_CODE = '2133';

function App() {

  const [viewData, setViewData] = useState([]); //STATICVIEWDATA
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
    // TODO: Add ids to each view so we can use them as keys

    setViewData(data);
  }

  function postProcessData(data) {
    // TODO: add the image proportions

    return data;
  }

  // Load Data
  useEffect( () => {
    if(!dataLoaded) fetch('/json', { 
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
        jsonRes => { preProcessData(jsonRes); setDataLoaded(true); }
      );

  });

  return (
    <div className="App">
      <Viewer views={viewData} onNewData={setViewData} mode="view" />
      <Viewer views={viewData} onNewData={setViewData} mode="edit" onChange={onDataChange} onAddNew={onAddNew} onRemove={onViewRemove} onSave={onSave}/>
    </div>
  );
}

export default App;

/*
const STATICVIEWDATA = [
  {
      "moduleType": "VTextBox",
      "attributes": {
          "padding": 14,
          "backgroundColor": {
              "hex": "#FF0000"
          },
          "bodyText": "20% Discount on all items",
          "textAlignment": "right",
          "fontSize": 21,
          "capitalised": true,
          "fontColor": {
              "hex": "#0000FF"
          }
      }
  },
  {
      "moduleType": "VImageWithPadding",
      "attributes": {
          "padding": 50,
          "backgroundColor": {
              "hex": "#00BB00"
          },
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
          "link": {
              "payload": "124",
              "type": "category"
          }
      },
      "heightMultiplier": 1.25
  },
  {
      "moduleType": "VImageCarousel",
      "attributes": {
          "padding": 0,
          "images": [
              "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
              "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
              "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade"
          ]
      },
      "heightMultiplier": 1.25
  }
];
*/