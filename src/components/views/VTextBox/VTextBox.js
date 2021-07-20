import PropTypes from 'prop-types';

function VTextBox(props) {

    const atts = props.attributes;
    
    return (
        <div
            className='VTextBox'
            onClick={props.onClick}
            style={{
                'backgroundColor': atts.backgroundColor ? atts.backgroundColor.hex : {'hex':''},
                'textAlign': atts.textAlignment,
                'color': atts.fontColor ? atts.fontColor.hex : {'hex':''} ,
                'textTransform': atts.capitalised ? 'uppercase' : 'none',
                'fontSize': atts.fontSize + 'px',
                'padding': atts.padding + 'px'
            }}
        >{atts.bodyText}</div>
    );
}

VTextBox.propTypes = {
    attributes: PropTypes.array,
    onClick: PropTypes.func
};

export default VTextBox;