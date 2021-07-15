import { useState } from 'react';
import BooleanField from './fields/BooleanField';
import ColorField from './fields/ColorField';
import NumberField from './fields/NumberField';
import SelectField from './fields/SelectField';
import TextField from './fields/TextField';
import MultiTextField from './fields/MultiTextField';
import './ModuleEditor.scss';

function ModuleEditor(props) {

    const [editorIsOpen, setEditorIsOpen] = useState(false);

    function toggleEditorOpen() {
        setEditorIsOpen(!editorIsOpen);
    }

    const formFields = props.fields.map( field => {
        let input = null;
        const splitFieldName = field.name.split('.');
        const value = (
            // support for second level field names, e.g. link.type
            field.name.indexOf('.') !== -1 ?
            (
                props.values[splitFieldName[0]][splitFieldName[1]] ? 
                props.values[splitFieldName[0]][splitFieldName[1]] 
                : field.default
            )
            : props.values[field.name] ? props.values[field.name] : field.default
        );
        const onChange = value => props.onChange( field.name, value );

        switch(field.type) {
            case 'text': input = <TextField value={value} onChange={onChange}/>; break;
            case 'boolean': input = <BooleanField value={value} onChange={onChange}/>; break;
            case 'number': input = <NumberField value={value} onChange={onChange} max={field.max} min={field.min}/>; break;
            case 'select': input = <SelectField options={field.options} value={value} onChange={onChange}/>; break;
            case 'color': input = <ColorField value={value} onChange={onChange}/>; break;
            case 'multitext': input = <MultiTextField value={value} onChange={onChange}/>; break;
            default: return null;
        };

        return (
            <div key={field.name} className="editor-field">
                <label>{field.label}</label>
                {input}
            </div>
        );
    });

    return (
        <div className="ModuleEditor">
            <div className="title" onClick={toggleEditorOpen}>{props.title}</div>
            {editorIsOpen ? formFields : null}
        </div>
    );
}

export default ModuleEditor;