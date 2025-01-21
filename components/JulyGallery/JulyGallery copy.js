import React from 'react';
import Masonry from 'react-masonry-css';


const GridLayout = () => {
  const gridItems = [
    { id: 1, image: '/images/gallery-img-1.jpg' },
    { id: 2, image: '/images/gallery-img-2.png' },
    { id: 3, image: '/images/gallery-img-3.jpg' },
    { id: 4, image: '/images/gallery-img-4.jpg' },
    { id: 5, image: '/images/gallery-img-5.jpg' },
    { id: 6, image: '/images/gallery-img-6.jpg' },
    { id: 7, image: '/images/gallery-img-7.jpg' },
    { id: 8, image: '/images/gallery-img-8.jpg' },
    { id: 9, image: '/images/JulyGalleryImg1.jpg' },
  ];

  // Masonry breakpoints
  const breakpointColumns = {
    default: 4,
    992: 2,
    768: 1,
  };

  return (
    <div className='masonry_grid_column_wrap'>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {gridItems.map((item) => (
          <div key={item.id} className="masonry-item">
            <img src={item.image} alt={`Grid Item ${item.id}`} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default GridLayout;
