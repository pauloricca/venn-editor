import './VImageWithPadding.scss';

export default function VImageWithPadding(props) {

    const atts = props.attributes;

    return (
        <div 
            className='VImageWithPadding'
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
