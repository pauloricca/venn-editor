import ModuleEditor from '../ui/ModuleEditor';

function VTextBox(props) {

    const schema = [
        { "name": "bodyText", "label": "Text", "type": "text", "default": "(Type text)" },
        { "name": "fontSize", "label": "Font Size", "type": "number", "default": 13, "min": 5, "max": 50 },
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "textAlignment", "label": "Text Alignment", "type": "select", "options": ["left", "center", "right"], "default": "left" },
        { "name": "capitalised", "label": "Capitalize", "type": "boolean", "default": false },
        { "name": "fontColor", "label": "Text Color", "type": "color", "default": "#000000" },
        { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": "#FFFFFF" }
    ];

    if(props.mode==="view") return (
        <div
            className='VTextBox'
            style={{
                'backgroundColor': props.attributes.backgroundColor ? props.attributes.backgroundColor.hex : schema.find(f=>f.name==='backgroundColor').default,
                'textAlign': props.attributes.textAlignment,
                'color': props.attributes.fontColor ? props.attributes.fontColor.hex : schema.find(f=>f.name==='fontColor').default,
                'textTransform': props.attributes.capitalised ? 'uppercase' : 'none',
                'fontSize': props.attributes.fontSize + 'px',
                'padding': props.attributes.padding + 'px'
            }}
        >{props.attributes.bodyText ? props.attributes.bodyText : schema.find(f=>f.name==='bodyText').default}</div>
    );

    else return (
        <ModuleEditor 
            title="Text"
            values={props.attributes} 
            fields={schema}
            onChange={props.onChange}
        />
    );
}

export default VTextBox;