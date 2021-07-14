import ModuleEditor from '../ui/ModuleEditor';

function VImageCarousel(props) {

    const images = props.attributes.images.map( (url, i) => <img src={url} alt=""/> );

    if(props.mode==="view") return (
        <div 
            className='VImageCarousel'
            style={{
                'padding':  props.attributes.padding + 'px'
            }}
        >
            {images}
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
