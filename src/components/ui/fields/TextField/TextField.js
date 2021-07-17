function TextField(props) {
    return (
        <input 
            type="text"
            data-testid="textfield"
            value={props.value} 
            onChange={event => props.onChange ? props.onChange(event.target.value) : ''}
        />
    );
}

export default TextField;