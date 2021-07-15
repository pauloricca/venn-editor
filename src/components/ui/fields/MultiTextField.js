function MultiTextField(props) {

    let values = [...props.value];
    
    // add an empty field at the end to allow writing new lines
    values.push('');

    function onChange(index, value) {
        values[index] = value;
        // clear the empty lines at the end
        while (!values[values.length-1]) values.pop();
        props.onChange(values);
    }
    
    return values.map( (value, vi) => (
        <input type="text"
            key={vi}
            value={value} 
            onChange={event => onChange( vi, event.target.value)}
        />
    ));
}

export default MultiTextField;