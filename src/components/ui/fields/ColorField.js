import { SketchPicker } from 'react-color'
import './ColorField.scss';

function ColorField(props) {
    return (
        <div className="ColorField">
            <div
                className="color-preview"
                style={{"backgroundColor": props.value.hex}}
            />
            <SketchPicker color={ props.value.hex } onChange={color => props.onChange( {hex: color.hex} )} />
        </div>
    );
}

export default ColorField;