function NumberField(props) {
    return (
        <input type="number"
            value={props.value} 
            onChange={event => props.onChange( event.target.value )}
            max={props.max}
            min={props.min}
        />
    );
}

export default NumberField;