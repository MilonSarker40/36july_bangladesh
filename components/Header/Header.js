import React from 'react';
import Image from 'next/image';
import Classes from '../../styles/header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Logo from '../../public/images/logo.png';

const Header = () => {
    return (
        <header className={Classes.header}>
            <div className={Classes.hdr_tp}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={Classes.header_innr}>
                                <div className={Classes.hdr_tp_contact}>
                                    <ul className='clearfix reset-list'>
                                        <li><a href='#'><i class="ri-phone-line"></i>01578641230</a></li>
                                        <li><a href='#'><i class="ri-mail-line"></i>36julybangladesh@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div className='language__switcher'>
                                    <LanguageSwitcher />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Classes.hdr_btm}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className={Classes.hdr_btm_innr}>
                                <div className={Classes.logo}>
                                    <a href='#'>
                                        <Image src={Logo} alt='Logo' />
                                    </a>
                                </div>
                                <div className={Classes.nav__menu}>
                                    <ul className='clearfix reset-list'>
                                        <li><a href='#'>হোম</a></li>
                                        <li><a href='#'>আমাদের সম্পর্কে</a></li>
                                        <li><a href='#'>শহীদদের তথ্য</a></li>
                                        <li><a href='#'>গ্যালারি</a></li>
                                        <li><a href='#'>যোগাযোগ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;