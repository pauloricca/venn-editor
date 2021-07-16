function SelectField({options, value, onChange}) {
    const optionElements = options.map( (option, oi) => <option key={option}>{option}</option> );
    return (
        <select
            value={value}
            onChange={event => onChange( event.target.value ) }
        >
            {optionElements}
        </select>
    );
}

export default SelectField;