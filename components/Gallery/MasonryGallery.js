import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(8); // Initially, show 8 images

  const images = [
    '/images/gallery-img-1.jpg',
    '/images/gallery-img-2.png',
    '/images/gallery-img-3.jpg',
    '/images/gallery-img-4.jpg',
    '/images/gallery-img-5.jpg',
    '/images/gallery-img-6.jpg',
    '/images/gallery-img-7.jpg',
    '/images/gallery-img-8.jpg',
    '/images/gallery-img-1.jpg',
    '/images/gallery-img-2.png',
    '/images/gallery-img-3.jpg',
    '/images/gallery-img-4.jpg',
    '/images/gallery-img-5.jpg',
    '/images/gallery-img-6.jpg',
    '/images/gallery-img-7.jpg',
    '/images/gallery-img-8.jpg',
  ];

  // Function to handle image click for Lightbox
  const handleImageClick = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  // Function to handle "Read More" button click
  const loadMoreImages = () => {
    setVisibleImages(visibleImages + 4); // Show 4 more images on button click
  };

  return (
    <div className="container container--gallery">
      <div className="row">
        <div className='col-md-12'>
            <div className='gallery_grid_wrap'>
                <ul className='clearfix reset-list'>
                    {images.slice(0, visibleImages).map((image, index) => (
                    <li key={index}>
                        <div className='gallery_grid'>
                            <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleImageClick(index);  // Open the lightbox when clicked
                            }}
                            >
                            <img src={image} alt={`Gallery Image ${index + 1}`} />
                            </a>
                        </div>
                    </li>
                    ))}
                </ul>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      {visibleImages < images.length && (
        <div className="read-more-btn">
          <button onClick={loadMoreImages}>ছবি লোড করুন</button>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
