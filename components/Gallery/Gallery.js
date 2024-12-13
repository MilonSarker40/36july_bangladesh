import React from 'react';
import Classes from '../../styles/gallery.module.css';
import MasonryGallery from './MasonryGallery';

const Gallery = () => {
    return (
        <div className={Classes.gallery_grid_sec_wrap}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common_headding text-center'>
                            <h2 className='mb-4'>গ্যালারি</h2>
                        </div>
                        <div className='gallery_grid_wrap'>
                            <MasonryGallery />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;