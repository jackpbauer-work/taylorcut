import React from 'react';
import gallery_2 from '../images/gallery_2.JPG';
import gallery_3 from '../images/gallery_3.JPG';
import gallery_4 from '../images/gallery_4.JPG';
import gallery_5 from '../images/gallery_5.JPG';
import gallery_6 from '../images/gallery_6.JPG';
import gallery_7 from '../images/gallery_7.JPG';
import gallery_8 from '../images/gallery_8.JPG';
import gallery_9 from '../images/gallery_9.JPG';
import gallery_10 from '../images/gallery_10.JPG';
import gallery_11 from '../images/gallery_11.JPG';
import gallery_12 from '../images/gallery_12.JPG';
import gallery_13 from '../images/gallery_13.JPG';
import gallery_14 from '../images/gallery_14.JPG';
import gallery_15 from '../images/gallery_15.JPG';
import gallery_18 from '../images/gallery_18.JPG';
import gallery_19 from '../images/gallery_19.JPG';
import gallery_20 from '../images/gallery_20.JPG';
import gallery_21 from '../images/gallery_21.JPG';
import gallery_22 from '../images/gallery_22.JPG';
import gallery_23 from '../images/gallery_23.JPG';
import gallery_24 from '../images/gallery_24.JPG';
import gallery_25 from '../images/gallery_25.JPG';
import gallery_26 from '../images/gallery_26.JPG';
import gallery_28 from '../images/gallery_28.JPG';
import gallery_29 from '../images/gallery_29.JPG';
import gallery_30 from '../images/gallery_30.JPG';
import gallery_32 from '../images/gallery_32.JPG';



import '../css/Gallery.css';

function Gallery() {
  const images = [gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10, gallery_10, gallery_11, gallery_12, gallery_13, gallery_14, gallery_15, gallery_18, gallery_19, gallery_20, gallery_21, gallery_22, gallery_23, gallery_24, gallery_25, gallery_26, gallery_28, gallery_29, gallery_30, gallery_32] // Add more image imports as needed

  return (
    <div className="gallery-container">
      <h1>Retreat Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
          <img src={image} alt={index + 1} className="gallery-image" />
            <div className="overlay">
              <p className="overlay-text">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;