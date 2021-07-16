//import reactImageSize from 'react-image-size';

const schemas = {
    "VTextBox": {
        "friendlyName": "Text",
        "fields": [
            { "name": "bodyText", "label": "Text", "type": "text", "default": "(Type text)" },
            { "name": "fontSize", "label": "Font Size", "type": "number", "default": 13, "min": 5, "max": 50 },
            { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
            { "name": "textAlignment", "label": "Text Alignment", "type": "select", "options": ["left", "center", "right"], "default": "left" },
            { "name": "capitalised", "label": "Capitalize", "type": "boolean", "default": false },
            { "name": "fontColor", "label": "Text Color", "type": "color", "default": {"hex": "#000000"} },
            { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": {"hex": "#FFFFFF"} }
        ]
    },
    "VImageWithPadding": {
        "friendlyName": "Image",
        "fields": [
            { "name": "link.type", "label": "Link Type", "type": "select", "options": ["category", "product"], "default": "category" },
            { "name": "link.payload", "label": "Link Payload", "type": "text", "default": "" },
            { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
            { "name": "backgroundColor", "label": "Background Color", "type": "color", "default": {"hex": "#FFFFFF"} },
            { "name": "imageUrl", "label": "Image URL", "type": "text", "default": "" }
        ],
        "postProcess": (viewData) => {
            /*try {
                const { width, height } = await reactImageSize(viewData.attributes.imageUrl);
                console.log(width, height);
                viewData.heightMultiplier = height/width;
            } catch (err) {
                console.log("error getting image sizes");
            }*/
        }
    },
    "VImageCarousel": {
        "friendlyName": "Carousel",
        "fields": [
            { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
            { "name": "images", "label": "Image URLs", "type": "multitext", "default": [""] }
        ]
    }
}

export default schemas;