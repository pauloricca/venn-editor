import PropTypes from 'prop-types';

function NumberField(props) {

    const onChange = event => props.onChange ? props.onChange( parseFloat(event.target.value)) : '';

    return (
        <div>
            <input type="number"
                data-testid="numberfield"
                value={props.value} 
                onChange={onChange}
                max={props.max}
                min={props.min}
            />
            <input 
                data-testid="numberslider"
                type="range"  
                min={props.min}
                onChange={onChange}
                max={props.max}
                value={props.value ? props.value : 0} 
                step="1"
            />
         </div>
    );
}

NumberField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default NumberField;