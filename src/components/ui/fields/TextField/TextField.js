import PropTypes from 'prop-types';

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

TextField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;