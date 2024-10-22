import React from 'react';
import heroCategory from '../img/homeBanner.png'; // Replace with actual image path
import i1 from '../img/i1.png';
import i2 from '../img/i2.png';

import i4 from '../img/i4.png';
import i5 from '../img/i5.png';
import i6 from '../img/i6.png';
import i7 from '../img/i7.png';
const PetSellers = () => {
  return (
    <section className=" py-16 ml-28 mr-28">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">Proud to be part of <span className="text-blue-600 text-2xl">Pet Sellers</span></p>
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">View all our sellers</button>
        </div>

        <div className="grid grid-cols-6 gap-4 mb-8">
          <img src={i1} alt="Seller 1" />
          <img src={i2}  alt="Seller 2" />
          <img src={i4} alt="Seller 3" />
          <img src={i5}  alt="Seller 4" />
          <img src={i6}  alt="Seller 5" />
          <img src={i7}  alt="Seller 6" />
        </div>

        <div className="bg-orange-200 rounded-2xl shadow-lg flex mt-20">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold text-blue-900 left-10 ml-20 mt-20">Adoption</h2>
            <p className="text-3xl mt-4 font-bold text-blue-900 mb-4 ml-20">We need help. So do they.</p>
            <p className="text-gray-500 text-xs mb-6 ml-20">Adopt a pet and give it a home. <br></br>It will love you back unconditionally.</p>
            <div className="space-x-4 ml-20">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Explore Now</button>
              <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">View Intro</button>
            </div>
          </div>
          <div>
  <img src={heroCategory} alt="Adoption Image" className="rounded-lg h-96 w-96" />
</div>

        </div>
      </div>
    </section>
  );
};

export default PetSellers;
