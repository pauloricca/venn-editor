import BooleanField from './fields/BooleanField/BooleanField';
import ColorField from './fields/ColorField/ColorField';
import NumberField from './fields/NumberField/NumberField';
import SelectField from './fields/SelectField/SelectField';
import TextField from './fields/TextField/TextField';
import MultiTextField from './fields/MultiTextField/MultiTextField';
import './ModuleEditor.scss';

function ModuleEditor(props) {

    const formFields = props.fields.map( field => {

        const splitFieldName = field.name.split('.');
        const value = (
            // support for second level field names, e.g. link.type
            field.name.indexOf('.') !== -1 ?
            (
                props.values[splitFieldName[0]] && props.values[splitFieldName[0]][splitFieldName[1]] ? 
                props.values[splitFieldName[0]][splitFieldName[1]] 
                : field.default
            )
            : props.values[field.name] ? props.values[field.name] : field.default
        );

        const onChange = value => props.onChange( field.name, value );

        const input = function() {
            switch(field.type) {
                case 'text': return <TextField value={value} onChange={onChange}/>;
                case 'boolean': return<BooleanField value={value} onChange={onChange}/>;
                case 'number': return<NumberField value={value} onChange={onChange} max={field.max} min={field.min}/>;
                case 'select': return<SelectField options={field.options} value={value} onChange={onChange}/>;
                case 'color': return<ColorField value={value} onChange={onChange}/>;
                case 'multitext': return<MultiTextField value={value} onChange={onChange}/>;
                default: return null;
            };
        }();

        return (
            <div key={field.name} className="editor-field">
                <label>{field.label}</label>
                {input}
            </div>
        );
    });

    return (
        <div className="ModuleEditor embossy">
            <div className="title" onClick={props.toggleOpen}>{props.isOpen ? '–' : '+'} {props.title}</div>
            <div className="remove-btn" onClick={props.onRemove}>+</div>
            {props.isOpen ? formFields : null}
        </div>
    );
}

export default ModuleEditor;