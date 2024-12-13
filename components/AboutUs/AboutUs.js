import React from 'react';
import Image from 'next/image';
import AboutUsImg from '../../public/images/aboutus-img.jpg';
import Classes from '../../styles/aboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={Classes.about_us_sec_wrap}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className={Classes.about_us_wrap}>
                            <div className={Classes.about_us_img}>
                                <Image src={AboutUsImg} alt='About Us Img' />
                            </div>
                            <div className={Classes.about_us_dsc}>
                                <h2>স্বাধীন বাংলাদেশ</h2>
                                <p>বাংলাদেশে সাম্প্রতিক বৈষম্য বিরোধী ছাত্র আন্দোলন উল্লেখযোগ্য ঘটনা হিসেবে সামনে এসেছে। ২০২৪ সালের জুলাইয়ে এই আন্দোলন শুরু হয়, যেখানে শিক্ষার্থীরা কোটা সংস্কারসহ সামগ্রিক বৈষম্যের বিরুদ্ধে রুখে দাঁড়িয়েছে। ঢাকাসহ বিভিন্ন শহরে সংঘর্ষ এবং সহিংসতায় বেশ কয়েকজন নিহত ও শতাধিক আহত হয়েছেন। আন্দোলনটি সরকারের বিরুদ্ধে বৃহৎ জনমত গড়ে তুলতে সক্ষম হয় এবং প্রধানমন্ত্রী শেখ হাসিনা পদত্যাগ করতে বাধ্য হন। পরবর্তীতে অন্তর্বর্তীকালীন সরকারে ছাত্র আন্দোলনের কয়েকজন নেতাকে উপদেষ্টা হিসেবে অন্তর্ভুক্ত করা হয়েছে, যা নজিরবিহীন ঘটনা বলে বিবেচিত হচ্ছে</p>
                                <a href='#'>আরো পড়ুন</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;