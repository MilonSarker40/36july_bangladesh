import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    // ব্লগ ডাটা
    const blogData = [
        {
            id: 1,
            title: "প্রথম ব্লগ পোস্ট",
            date: "10/5/2024",
            description: "এটি একটি ডেমো ব্লগ পোস্ট। ব্লগের বিস্তারিত বিবরণ এখানে দেওয়া হবে।",
            image: "/images/blog_post_slide_item_img-1.jpg",
            link: "/blog/1"
        },
        {
            id: 2,
            title: "দ্বিতীয় ব্লগ পোস্ট",
            date: "12/5/2024",
            description: "এটি একটি ডেমো ব্লগ পোস্ট। ব্লগের বিস্তারিত বিবরণ এখানে দেওয়া হবে।",
            image: "/images/blog_post_slide_item_img-2.webp",
            link: "/blog/2"
        },
        {
            id: 3,
            title: "তৃতীয় ব্লগ পোস্ট",
            date: "15/5/2024",
            description: "এটি একটি ডেমো ব্লগ পোস্ট। ব্লগের বিস্তারিত বিবরণ এখানে দেওয়া হবে।",
            image: "/images/blog_post_slide_item_img-3.png",
            link: "/blog/3"
        },
        {
            id: 4,
            title: "চতুর্থ ব্লগ পোস্ট",
            date: "18/5/2024",
            description: "এটি একটি ডেমো ব্লগ পোস্ট। ব্লগের বিস্তারিত বিবরণ এখানে দেওয়া হবে।",
            image: "/images/blog_post_slide_item_img-4.webp",
            link: "/blog/4"
        }
    ];

    return (
        <div className="blog_post_sec_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="blog_post_wrap">
                            <div className="blog_post_head text-center">
                                <h2>ব্লগ পোস্ট</h2>
                            </div>
                            <Slider {...settings}>
                                {blogData.map((blog) => (
                                    <div className="blog_post_slide_item" key={blog.id}>
                                        <div className="blog_post_slide_item_innr">
                                            <div className="blog_post_slide_item_img">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    width={400}
                                                    height={250}
                                                />
                                            </div>
                                            <div className="blog_post_slide_item_dsc">
                                                <h3><a href='#'>{blog.title}</a></h3>
                                                <span>{blog.date}</span>
                                                <p>{blog.description}</p>
                                                <a href={blog.link}>বিস্তারিত পড়ুন<i class="ri-add-line"></i></a>
                                            </div>
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

export default Blog;
