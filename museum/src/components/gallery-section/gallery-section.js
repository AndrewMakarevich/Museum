import './gallery-section.css';
import { useContext, useEffect } from 'react';
import { Context } from '../..';

import { masonry } from './masonryScript';

const Gallery = () => {
    useEffect(() => {
        if (window.innerWidth <= 768) {
            masonry(2);
        } else {
            masonry(3);
        }
    }, []);
    const { gallery } = useContext(Context);
    return (
        <div className="gallery-container">
            <a name="Gallery"></a>
            <h2 className="gallery-header">art gallery</h2>
            <div className="gallery-columns">
                {
                    gallery.firstColumn.map((picture) => {
                        return (
                            <img className="gallery-image" key={picture.id} src={picture.url} alt="" />
                        )
                    })
                }
            </div>
            <div className="gallery-footer"></div>
        </div>
    )
}
export default Gallery;