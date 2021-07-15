import ModuleEditor from '../ui/ModuleEditor';
import './VImageWithPadding.scss';

function VImageWithPadding(props) {

    const schema = [
        { "name": "link.type", "label": "Link Type", "type": "select", "options": ["category", "product"], "default": "category" },
        { "name": "link.payload", "label": "Link Payload", "type": "text", "default": "" },
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": {"hex": "#FFFFFF"} },
        { "name": "imageUrl", "label": "Image URL", "type": "text", "default": "" }
    ];

    const atts = props.attributes;

    if(props.mode==="view") return (
        <div 
            className='VImageWithPadding'
            style={{
                'backgroundColor': atts.backgroundColor ? atts.backgroundColor.hex : schema.find(f=>f.name==='backgroundColor').default,
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

    else return <ModuleEditor title="Image" values={atts} fields={schema} onChange={props.onChange} onRemove={props.onRemove}/>;
}
  
export default VImageWithPadding;
