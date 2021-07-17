function NumberField(props) {
    return (
        <div>
            <input type="number"
                value={props.value} 
                onChange={event => props.onChange( event.target.value )}
                max={props.max}
                min={props.min}
            />
            <input 
                type="range"  
                min={props.min}
                onChange={event => props.onChange( event.target.value )}
                max={props.max}
                value={props.value} 
                step="1"
            />
         </div>
    );
}

export default NumberField;