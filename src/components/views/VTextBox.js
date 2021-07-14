function VTextBox(props) {
    return (
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
}

export default VTextBox;