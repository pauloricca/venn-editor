function TextField(props) {
    return (
        <input type="text"
            value={props.value} 
            onChange={event => props.onChange( event.target.value )}
        />
    );
}

export default TextField;