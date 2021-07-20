import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

function VImageCarousel(props) {

    const atts = props.attributes;

    const images = atts.images ? atts.images.map( (url, i) => (
        <div key={i}>
            <img src={url} alt=""/>
        </div>
    )) : [];

    return (
        <div 
            className='VImageCarousel'
            onClick={props.onClick}
            style={{
                'padding':  atts.padding + 'px'
            }}
        >
            <Carousel 
                showArrows={true}
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                emulateTouch={false}
            >
                {images}
            </Carousel> 
        </div>
    );
}

VImageCarousel.propTypes = {
    attributes: PropTypes.array,
    onClick: PropTypes.func
};

export default VImageCarousel;