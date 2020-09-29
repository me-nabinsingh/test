import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PlanetGallery = ({images}) => {
    const items = images.map(image => {
        return (
            {   
                original: image.url,
                thumbnail: image.url
            }
        );
    });
    return ( 
        <ImageGallery items={items} />
     );
}
 
export default PlanetGallery;