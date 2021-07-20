import PropTypes from 'prop-types';

import { SketchPicker } from 'react-color'
import './ColorField.scss';

function ColorField(props) {
    return (
        <div className="ColorField prevent-drag">
            <div
                className="color-preview"
                style={{"backgroundColor": props.value.hex}}
            />
            <SketchPicker color={ props.value.hex } onChange={color => props.onChange( {hex: color.hex} )} />
        </div>
    );
}

ColorField.propTypes = {
    value: PropTypes.shape({
        hex: PropTypes.string,
    }),
    onChange: PropTypes.func
};

export default ColorField;