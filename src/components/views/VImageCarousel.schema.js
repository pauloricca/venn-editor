import reactImageSize from 'react-image-size';

const schema = {
    "friendlyName": "Carousel",
    "fields": [
        { "name": "padding", "label": "Padding", "type": "number", "default": 0, "min": 0, "max": 100 },
        { "name": "images", "label": "Image URLs", "type": "multitext", "default": [] }
    ],
    "postProcess": async (viewData) => {
        try {
            let maxHeightMultiplier = 0;
            for(const imgUrl of viewData.attributes.images) {
                const { width, height } = await reactImageSize(imgUrl);
                if(height/width > maxHeightMultiplier) maxHeightMultiplier = height/width;
            }
            viewData.heightMultiplier = maxHeightMultiplier;
        } catch (err) {
            console.log("error getting image sizes");
        }
    }
}

export default schema;