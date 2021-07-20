import PropTypes from 'prop-types';

function SelectField(props) {
    const options = props.options.map( (option, oi) => <option key={option}>{option}</option> );
    return (
        <select
            value={props.value}
            onChange={event => props.onChange( event.target.value ) }
        >
            {options}
        </select>
    );
}

SelectField.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
};

export default SelectField;