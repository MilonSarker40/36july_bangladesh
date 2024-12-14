import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderLibrary from "react-slick"; 
import SliderImg1 from '../../public/images/hm-banner-img1.png';
import SliderImg2 from '../../public/images/hm-banner-img2.png';
import SliderImg3 from '../../public/images/slider-img-3.jpg';
import SliderImg4 from '../../public/images/slider-img-4.jpg';


function Slider() { // ফাংশনের নাম ঠিক রাখা হয়েছে
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container">
      <SliderLibrary {...settings}>
        <div className="slide-item">
          <Image src={SliderImg1} alt="Slider Img 1" />
        </div>
        <div className="slide-item">
          <Image src={SliderImg2} alt="Slider Img 2" />
        </div>
        <div className="slide-item">
          <Image src={SliderImg3} alt="Slider Img 3" />
        </div>
        <div className="slide-item">
          <Image src={SliderImg4} alt="Slider Img 4" />
        </div>
      </SliderLibrary>
    </div>
  );
}

export default Slider;
