import React from 'react';
import Masonry from 'react-masonry-css';

const GridLayout = () => {
  const gridItems = [
    { id: 1, image: '/images/gallery-img-1.jpg', type: 'top' },
    { id: 2, image: '/images/gallery-img-2.jpg', type: 'bottom-left' },
    { id: 3, image: '/images/gallery-img-3.jpg', type: 'bottom-right' },
    { id: 4, image: '/images/gallery-img-4.jpg', type: 'top' },
    { id: 5, image: '/images/gallery-img-5.jpg', type: 'middle' },
    { id: 6, image: '/images/gallery-img-6.jpg', type: 'bottom' },
    { id: 7, image: '/images/gallery-img-7.jpg', type: 'top' },
    { id: 8, image: '/images/gallery-img-8.jpg', type: 'bottom' },
  ];

  // Breakpoints for Masonry
  const breakpointColumns = {
    default: 3,
    768: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="grid-container"
      columnClassName="grid-column"
    >
      {gridItems.map((item) => (
        <div
          key={item.id}
          className={`grid-item ${item.type === 'top' ? 'top' : ''} ${item.type === 'middle' ? 'middle' : ''} ${item.type === 'bottom-left' ? 'bottom-left' : ''} ${item.type === 'bottom-right' ? 'bottom-right' : ''}`}
          style={{ backgroundImage: item.image ? `url(${item.image})` : 'none' }}
        >
          <img src={item.image} alt="grid" />
        </div>
      ))}
    </Masonry>
  );
};

export default GridLayout;
