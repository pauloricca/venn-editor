import PropTypes from 'prop-types';
import './VImageWithPadding.scss';

function VImageWithPadding(props) {

    const atts = props.attributes;

    return (
        <div 
            className='VImageWithPadding'
            onClick={props.onClick}
            style={{
                'backgroundColor': atts.backgroundColor ? atts.backgroundColor.hex : {'hex': ''},
                'padding':  atts.padding + 'px'
            }}
        >
            <a 
                href={`/${atts.link ? atts.link.type : ''}/${atts.link ? atts.link.payload : ''}`}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={atts.imageUrl}
                    alt=""
                />
            </a>
        </div>
    );
}

VImageWithPadding.propTypes = {
    attributes: PropTypes.array,
    onClick: PropTypes.func
};

export default VImageWithPadding;