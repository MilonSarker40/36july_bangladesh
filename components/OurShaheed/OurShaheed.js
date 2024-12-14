import React from 'react';
import Classess from '../../styles/ourshaheed.module.css'; 
import TeamSlider from './TeamSlider';

const OurShaheed = () => {
    return (
        <div className={Classess.our_shaheed_sec_wrap}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='our_head text-center'>
                            <h2>জনপ্রিয় শহীদ</h2>
                        </div>
                        <div className='our_shaheed_member'>
                            <TeamSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShaheed;
