import './VImageWithPadding.scss';

function VImageWithPadding(props) {
    if(props.mode==="view") return (
        <div 
            className={'VImageWithPadding'}
            style={{
                'backgroundColor': props.attributes.backgroundColor.hex,
                'padding':  props.attributes.padding + 'px'
            }}
        >
            <a href={`/${props.attributes.link.type}/${props.attributes.link.payload}`}>
                <img
                    src={props.attributes.imageUrl}
                    alt=""
                />
            </a>
        </div>
    );

    else return (
        <div>Editing</div>
    );
  }
  
  export default VImageWithPadding;

/*
  {
    "moduleType": "VImageWithPadding",
    "attributes": {
        "padding": 0,
        "backgroundColor": {
            "hex": "#000000"
        },
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/mulawl.appspot.com/o/c70f0c40-78b4-11ea-9167-f7c4afbaf99b%2F2020-12-21%2Fritz_app2_1500x%402x.gif?alt=media&token=df148b2e-18df-47e8-844f-9755c5aedade",
        "link": {
            "payload": "123",
            "type": "category"
        }
    },
    "heightMultiplier": 1.25
}
*/