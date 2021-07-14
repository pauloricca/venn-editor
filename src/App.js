import { useState } from 'react';
import './App.scss';
import Viewer from './components/ui/Viewer';

function App() {

  const [viewData, setViewData] = useState(STATICVIEWDATA);

  function onDataChange(moduleIndex, fieldName, value) {
    let newData = [...viewData];
    newData[moduleIndex].attributes[fieldName] = value;
    setViewData(newData);
  }

  return (
    <div className="App">
      <Viewer views={viewData} mode="view"/>
      <Viewer views={viewData} mode="edit" onChange={onDataChange}/>
    </div>
  );
}

export default App;


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