function Editor(props) {

    const formFields = props.fields.map( field => {
        switch(field.type) {
            case 'text': 
                return (
                    <input type="text" key={field.name} 
                        value={props.values[field.name] ? props.values[field.name] : field.default} 
                        onChange={event => props.onChange( field.name, event.target.value )}
                    />
                );
            default: return null;
        };
    });

    return (
        <div className="Editor">
            {formFields}
        </div>
    );
}

export default Editor;