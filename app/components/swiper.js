'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const MySwiperComponent = ({ jobs }) => {
    // Check if jobs is defined and not null
    if (!jobs || jobs.length === 0) {
      return null; // Or render a message indicating no jobs are available
    }
  
    return (
      <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {jobs.map((job,index) => (
          <SwiperSlide key={job.title}>
            <div className="image-container2 flex justify-center">
              <Image className="my-0 mx-2.5 w-80 h-56 blur-sm"  src={job.path}  alt="" />

              <div className="overlay absolute top-2/4 left-1/2 text-white p-5 text-center bg-dark-blur">
              {/* <h2 className={`text-2xl font-bold ${index === 1 ? 'text-dark-pink' : ''}`}>{job.title}</h2> */}
              <h2 className="text-2xl font-bold ">{job.title}</h2>

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


