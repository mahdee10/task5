'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
const MySwiperComponent = ({ jobs }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    // Check if jobs is defined and not null
    if (!jobs || jobs.length === 0) {
      return null; // Or render a message indicating no jobs are available
    }
  
    return (
      <Swiper
        modules={[Navigation,Pagination,  EffectCoverflow]} // Add EffectCoverflow module
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect="coverflow" // Enable coverflow effect
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          console.log('slide change', swiper.activeIndex);
          setActiveSlideIndex(swiper.activeIndex);
        }}
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={job.title}>
            <div
              className={` flex justify-center ${
                index === activeSlideIndex+1 ? '' : ''
              }`}
            >
              <Image className={`my-0 mx-2.5 w-80 h-56 blur-sm ${
                index === activeSlideIndex+1 ? 'middle-slide' : ''
              }`}  src={job.path} alt="" />
  
              <div className="overlay absolute top-2/4 left-1/2 text-white p-5 text-center bg-dark-blur">
                <h2 className={`text-2xl font-bold ${index === 1 ? '' : ''}`}>
                  {job.title}
                </h2>
                <p>{job.experience}</p>
                <p>{job.salary}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  

export default MySwiperComponent;


