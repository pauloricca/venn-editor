import ModuleEditor from '../ui/ModuleEditor';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

function VImageCarousel(props) {

    const images = props.attributes.images.map( (url, i) => (
        <div key={i}>
            <img src={url} alt=""/>
        </div>
    ));

    if(props.mode==="view") return (
        <div 
            className='VImageCarousel'
            style={{
                'padding':  props.attributes.padding + 'px'
            }}
        >
            <Carousel 
                showArrows={true}
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                emulateTouch={true}
            >
                {images}
            </Carousel>
        </div>
    );

    else return (
        <ModuleEditor 
            title="Carousel"
            values={props.attributes} 
            fields={[
                { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
                { "name": "images", "label": "Image URLs", "type": "multitext", "default": [""] }
            ]}
            onChange={props.onChange}
        />
    );
}
  
export default VImageCarousel;
