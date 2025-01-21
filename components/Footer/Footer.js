import React from 'react';
import Image from 'next/image';
import FtrLogo from '../../public/images/logo.png';
import BlogPostImg from '../../public/images/blog-post-img.png';
import Classes from '../../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={Classes.footer_sec_wrap}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className={Classes.footer_wrap}>
                            <ul className='clearfix reset-list'>
                                <li>
                                    <div className={Classes.ftr_logo}>
                                        <a href='#'><Image src={FtrLogo} alt='Ftr Logo'/></a>
                                        <p>২০২৪ সালের জুলাইয়ে এই আন্দোলন শুরু হয়, যেখানে শিক্ষার্থীরা কোটা সংস্কারসহ সামগ্রিক বৈষম্যের বিরুদ্ধে রুখে দাঁড়িয়েছে।</p>
                                        <ul className='clearfix reset-list'>
                                            <li><a href='#'><i class="ri-facebook-line"></i></a></li>
                                            <li><a href='#'><i class="ri-linkedin-line"></i></a></li>
                                            <li><a href='#'><i class="ri-youtube-line"></i></a></li>
                                            <li><a href='#'><i class="ri-twitter-line"></i></a></li>
                                            <li><a href='#'><i class="ri-instagram-line"></i></a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className={Classes.ftr_col_menu}>
                                        <h5>গুরুত্বপূর্ণ লিঙ্ক</h5>
                                        <ul className='clearfix reset-list'>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>হোম</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>আমাদের সম্পর্কে</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>শহীদদের তথ্য</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>গ্যালারি</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>যোগাযোগ</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className={Classes.ftr_col_menu}>
                                        <h5>ঠিকানা</h5>
                                        <ul className='clearfix reset-list'>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>হোম</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>আমাদের সম্পর্কে</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>শহীদদের তথ্য</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>গ্যালারি</a></li>
                                            <li><a href='#'><i class="ri-arrow-drop-right-line"></i>যোগাযোগ</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className={Classes.ftr_col_post_menu}>
                                        <h5>গ্যালারি</h5>
                                        <ul className='clearfix reset-list'>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                  <Image src={BlogPostImg} alt='Blog Post Img' />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
            <div className={Classes.footer_btm_wrap}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={Classes.footer_btm}>
                                <p>© 36july 2024 | All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </footer>
    );
};

export default Footer;