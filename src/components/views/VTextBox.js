import Editor from '../ui/Editor';

function VTextBox(props) {
    if(props.mode==="view") return (
        <div
            className={'VTextBox'}
            style={{
                'backgroundColor': props.attributes.backgroundColor.hex,
                'textAlign': props.attributes.textAlignment,
                'color': props.attributes.fontColor.hex,
                'textTransform': props.attributes.capitalised ? 'uppercase' : 'none',
                'fontSize': props.attributes.fontSize + 'px',
                'padding': props.attributes.padding + 'px'
            }}
        >{props.attributes.bodyText}</div>
    );

    else return (
        <Editor 
            values={props.attributes} 
            fields={[
                { "name": "fontSize", "type": "text", "default": "one value" },
                { "name": "dois", "type": "text", "default": "another value" },
            ]}
            onChange={props.onChange}
        />
    );
}

export default VTextBox;