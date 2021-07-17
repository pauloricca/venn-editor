function BooleanField(props) {
    return (
        <input type="checkbox"
            checked={props.value} 
            onChange={event => props.onChange( event.target.checked )}
        />
    );
}

export default BooleanField;