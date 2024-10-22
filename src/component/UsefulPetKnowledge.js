import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image01 from '../img/image9.png'

const UsefulPetKnowledge = () => {
  return (
<section className=" ml-28 mr-28">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-gray-600 text-left">You already know?</p>
      <h2 className="text-3xl font-bold text-blue-900 text-left">Useful Pet Knowledge</h2>
    </div>
      <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">
        View more
      </button>
    </div>

    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={image01}
            alt="Pet Knowledge 1"
            className="rounded-lg w-full h-56 object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </h3>
          <p className="text-gray-600">
            The Pomeranian is known as the Pomeranian Pom dog and is always a top breed of pets.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={image01}
            alt="Pet Knowledge 2"
            className="rounded-lg w-full h-56 object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Dog Diet You Need to Know
          </h3>
          <p className="text-gray-600">
            Dividing a dog's diet may seem simple, but there are some rules you should know to
            make sure your dog is healthy.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={image01}
            alt="Pet Knowledge 3"
            className="rounded-lg w-full h-56 object-cover mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Why Dogs Bite and Destroy Furniture and How to Prevent It
          </h3>
          <p className="text-gray-600">
            Dog bites are common during development. Here’s how to prevent damage.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

  );
};

export default UsefulPetKnowledge;
