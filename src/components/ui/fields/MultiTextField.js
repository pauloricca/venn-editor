function MultiTextField(props) {

    let values = [...props.value];
    values.push('');

    function onChange(index, value) {
        values[index] = value;
        console.log('before', values);
        while (values[values.length-1]==='') values.pop();
        console.log('after', values);
        props.onChange(values);
    }
    
    const fields = values.map( (value, vi) => (
        <input type="text"
            key={vi}
            value={value} 
            onChange={event => onChange( vi, event.target.value)}
        />
    ));

    return (
        <div>
            {fields}
        </div>
    );
}

export default MultiTextField;