import PropTypes from 'prop-types';

function BooleanField(props) {
    return (
        <input type="checkbox"
            checked={props.value} 
            onChange={event => props.onChange( event.target.checked )}
        />
    );
}

BooleanField.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func
};

export default BooleanField;