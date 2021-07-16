const schema = {
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
}

export default schema;