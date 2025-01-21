import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Classes from '../../styles/ourshaheed.module.css';

const ShaheedKobita = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const kobitaData = [
        {
            title: "ত্রিশ ফাগুন",
            poet: "সগীর মোস্তফা",
            lines: ["দরজার ওপাশে ছোট্ট বেলকনি", "তার ওপাশে খোলা আকাশ","তার ওপাশে খোলা আকাশ","দরজার ওপাশে ছোট্ট বেলকনি", "তার ওপাশে খোলা আকাশ","তার ওপাশে খোলা আকাশ","দরজার ওপাশে ছোট্ট বেলকনি", "তার ওপাশে খোলা আকাশ"]
        },
        {
            title: "একুশে ফেব্রুয়ারি",
            poet: "জসীম উদ্দীন",
            lines: ["আমি বাংলায় গান গাই", "আমি বাংলার গান গাই","আমি বাংলায় গান গাই", "আমি বাংলার গান গাই","আমি বাংলায় গান গাই", "আমি বাংলার গান গাই","আমি বাংলায় গান গাই", "আমি বাংলার গান গাই"]
        },
        {
            title: "অমর একুশে",
            poet: "আল মাহমুদ",
            lines: ["মায়ের দেওয়া ভাষা", "আমার প্রাণের ভাষা","মায়ের দেওয়া ভাষা", "আমার প্রাণের ভাষা","মায়ের দেওয়া ভাষা", "আমার প্রাণের ভাষা","মায়ের দেওয়া ভাষা", "আমার প্রাণের ভাষা"]
        },
        {
            title: "বাংলা আমার মা",
            poet: "কাজী নজরুল ইসলাম",
            lines: ["আমি বাংলার গান গাই", "আমি বাংলার কথা বলি","আমি বাংলার গান গাই", "আমি বাংলার কথা বলি","আমি বাংলার গান গাই", "আমি বাংলার কথা বলি","আমি বাংলার গান গাই", "আমি বাংলার কথা বলি"]
        },
        {
            title: "বাংলা ভাষা",
            poet: "সুকান্ত ভট্টাচার্য",
            lines: ["আমার সোনার বাংলা", "আমি তোমায় ভালোবাসি","আমার সোনার বাংলা", "আমি তোমায় ভালোবাসি","আমার সোনার বাংলা", "আমি তোমায় ভালোবাসি","আমার সোনার বাংলা", "আমি তোমায় ভালোবাসি"]
        }
    ];

    return (
        <div className="shaheed_kobita_sec_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="shaheed_kobita_wrap">
                            <div className="shaheed_kobita_head text-center">
                                <h2>শহীদ কবিতা</h2>
                            </div>
                            <Slider {...settings}>
                                {kobitaData.map((kobita, index) => (
                                    <div className="shaheed_kobita_slide_item" key={index}>
                                        <div className="shaheed_kobita_slide_grid">
                                            <h5>{kobita.title}</h5>
                                            <h6>{kobita.poet}</h6>
                                            {kobita.lines.map((line, i) => (
                                                <p key={i}>{line}</p>
                                            ))}
                                            {/* বাটন যোগ করা হয়েছে */}
                                            <button className={Classes.kobitaButton}>
                                                আরও পড়ুন
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShaheedKobita;

