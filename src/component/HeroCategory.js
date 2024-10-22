import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import heroCategory from '../img/heroCategory.png';
import Navbar from './Navbar';

const HeroCategory = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg h-[400px] bg-orange-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Swiper spaceBetween={30} slidesPerView={1} className="mySwiper">
                <SwiperSlide>
                  <img src={heroCategory} alt="Dog 1" className="rounded-lg mt-10 md:mt-28" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
                One More Friend, Thousands More Fun!
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Having a pet means more joy, a new friend, a happy person who will always be with you. We have 200+ different pets that can meet your needs!
              </p>
              <div className="space-x-2 md:space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">View Intro</button>
                <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroCategory;
