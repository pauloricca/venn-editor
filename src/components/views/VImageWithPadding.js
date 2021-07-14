import ModuleEditor from '../ui/ModuleEditor';
import './VImageWithPadding.scss';

function VImageWithPadding(props) {
    if(props.mode==="view") return (
        <div 
            className={'VImageWithPadding'}
            style={{
                'backgroundColor': props.attributes.backgroundColor.hex,
                'padding':  props.attributes.padding + 'px'
            }}
        >
            <a 
                href={`/${props.attributes.link.type}/${props.attributes.link.payload}`}
                target="_blank"
            >
                <img
                    src={props.attributes.imageUrl}
                    alt=""
                />
            </a>
        </div>
    );

    else return (
        <ModuleEditor 
            title="Image"
            values={props.attributes} 
            fields={[
                { "name": "link.type", "label": "Link Type", "type": "select", "options": ["category", "product"], "default": "category" },
                { "name": "link.payload", "label": "Link Payload", "type": "text", "default": "" },
                { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
                { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": "#FFFFFF" },
                { "name": "imageUrl", "label": "Image URL", "type": "text", "default": "" }
            ]}
            onChange={props.onChange}
        />
    );
}
  
export default VImageWithPadding;
