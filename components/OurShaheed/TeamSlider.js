import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const TeamSlider = () => {
  const teamMembers = [
    {
      name: 'আবু সাহিদ',
      role: 'প্রথম শহীদ রংপুরের বেগম রোকেয়া বিশ্ববিদ্যালয়',
      image: '/images/members-img-1.jpg',
    },
    {
      name: 'মীর মুগ্ধ',
      role: 'দ্বিতীয় শহীদ উত্তরা ঢাকা ব্র্যাক বিশ্ববিদ্যালয়',
      image: '/images/members-img-2.jpg',
    },
    {
      name: 'আবু সাহিদ',
      role: 'প্রথম শহীদ রংপুরের বেগম রোকেয়া বিশ্ববিদ্যালয়',
      image: '/images/members-img-1.jpg',
    },
    {
      name: 'মীর মুগ্ধ',
      role: 'দ্বিতীয় শহীদ উত্তরা ঢাকা ব্র্যাক বিশ্ববিদ্যালয়',
      image: '/images/members-img-2.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="team-slider">
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
            <div key={index} className='team-member-item'>
                <div className="team-member">
                    <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="member-image"
                    />
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSlider;
