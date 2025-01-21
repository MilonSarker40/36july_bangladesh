import React from 'react';
import Image from 'next/image';


const GridLayout = () => {

  return (
    <div className="grid-layout">
      <div className='masonry_grid_column_wrap'>
        <div className='masonry_grid_column_1'>
          <div className='masonry_grid_1 pr-3 pb-3'>
            <img src='/images/sanotorni5.jpg' alt='Gallery Img 1' />
          </div>
          <div className='masonry_grid_2'>
            <div className='masonry_grid_lft_img pr-3'>
              <img src='/images/gallery-img-2.png' alt='Gallery Img 2' />
            </div>
            <div className='masonry_grid_rgt_img pr-3'>
              <img src='/images/gallery-img-3.jpg' alt='Gallery Img 3' />
            </div>
          </div>
        </div>
        <div className='masonry_grid_column_2'>
          <div className='masonry_grid_3 pb-3'>
            <img src='/images/gallery-img-4.jpg' alt='Gallery Img 4' />
          </div>
          <div className='masonry_grid_4 pb-3'>
            <img src='/images/gallery-img-5.jpg' alt='Gallery Img 5' />
          </div>
          <div className='masonry_grid_5'>
            <img src='/images/gallery-img-6.jpg' alt='Gallery Img 6' />
          </div>
        </div>
        <div className='masonry_grid_column_3 pl-3'>
          <div className='masonry_grid_6 pb-3'>
            <img src='/images/gallery-img-7.jpg' alt='Gallery Img 7' />
          </div>
          <div className='masonry_grid_7'>
            <img src='/images/gallery-img-8.jpg' alt='Gallery Img 8' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
