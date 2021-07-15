import ModuleEditor from '../ui/ModuleEditor';
import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

function VImageCarousel(props) {

    const schema = [
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "images", "label": "Image URLs", "type": "multitext", "default": [""] }
    ];

    const atts = props.attributes;

    const images = atts.images ? atts.images.map( (url, i) => (
        <div key={i}>
            <img src={url} alt=""/>
        </div>
    )) : [];

    if(props.mode==="view") return (
        <div 
            className='VImageCarousel'
            style={{
                'padding':  atts.padding + 'px'
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

    else return <ModuleEditor title="Carousel" values={atts} fields={schema} onChange={props.onChange} onRemove={props.onRemove}/>;
}
  
export default VImageCarousel;
