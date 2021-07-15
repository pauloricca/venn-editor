import ModuleEditor from '../ui/ModuleEditor';

function VTextBox(props) {

    const schema = [
        { "name": "bodyText", "label": "Text", "type": "text", "default": "(Type text)" },
        { "name": "fontSize", "label": "Font Size", "type": "number", "default": 13, "min": 5, "max": 50 },
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "textAlignment", "label": "Text Alignment", "type": "select", "options": ["left", "center", "right"], "default": "left" },
        { "name": "capitalised", "label": "Capitalize", "type": "boolean", "default": false },
        { "name": "fontColor", "label": "Text Color", "type": "color", "default": {"hex": "#000000"} },
        { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": {"hex": "#FFFFFF"} }
    ];

    const atts = props.attributes;

    if(props.mode==="view") return (
        <div
            className='VTextBox'
            style={{
                'backgroundColor': atts.backgroundColor ? atts.backgroundColor.hex : schema.find(f=>f.name==='backgroundColor').default,
                'textAlign': atts.textAlignment,
                'color': atts.fontColor ? atts.fontColor.hex : schema.find(f=>f.name==='fontColor').default,
                'textTransform': atts.capitalised ? 'uppercase' : 'none',
                'fontSize': atts.fontSize + 'px',
                'padding': atts.padding + 'px'
            }}
        >{atts.bodyText ? atts.bodyText : schema.find(f=>f.name==='bodyText').default}</div>
    );

    else return <ModuleEditor title="Text" values={atts} fields={schema} onChange={props.onChange} onRemove={props.onRemove}/>;
}

export default VTextBox;