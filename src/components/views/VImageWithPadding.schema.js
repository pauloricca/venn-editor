import reactImageSize from 'react-image-size';

const schema = {
    "friendlyName": "Image",
    "fields": [
        { "name": "link.type", "label": "Link Type", "type": "select", "options": ["category", "product"], "default": "category" },
        { "name": "link.payload", "label": "Link Payload", "type": "text", "default": "" },
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": {"hex": "#FFFFFF"} },
        { "name": "imageUrl", "label": "Image URL", "type": "text", "default": "" }
    ],
    "postProcess": async (viewData) => {
        try {
            const { width, height } = await reactImageSize(viewData.attributes.imageUrl);
            viewData.heightMultiplier = height/width;
        } catch (err) {
            console.log("error getting image sizes");
        }
    }
}

export default schema;