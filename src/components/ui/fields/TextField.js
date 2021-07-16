function TextField({value, onChange}) {
    return (
        <input 
            type="text"
            data-testid="textfield"
            value={value} 
            onChange={event => onChange( event.target.value )}
        />
    );
}

export default TextField;