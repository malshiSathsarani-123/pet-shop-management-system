import React from 'react';
import facebook from '../img/facebook.png';
import twitter from '../img/twiter (1).png';
import youtube from '../img/youtube.png';
import instagram from '../img/inster.png';

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-gray-700">
      <div className="flex flex-col items-center mx-4 md:mx-40 mt-20">
        <div className="bg-blue-900 text-white py-6 rounded-lg mt-10 w-full">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
            <h3 className="text-xl font-bold text-center md:text-left">
              Register Now So You Don't Miss <br /> Our Programs
            </h3>
            <div className="bg-white p-4 rounded-lg mt-4 md:mt-0">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="p-3 w-full md:w-96 mr-2 rounded-lg text-gray-700 focus:outline-none border border-black"
                />
                <button className="bg-blue-700 px-6 py-3 rounded-lg text-white hover:bg-blue-600 border border-black">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 w-full flex flex-col md:flex-row justify-between items-center">
          <div className="container mx-auto flex justify-center md:justify-start space-x-10"> {/* Center on mobile, left on larger screens */}
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Category</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0"> {/* Added margin for mobile spacing */}
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-10 h-6" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="w-10 h-6" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="w-10 h-6" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtube} alt="YouTube" className="w-10 h-6" />
            </a>
          </div>
        </div>

        <hr className="bg-black w-full" />

        <div className="py-6 bg-orange-100 text-center">
          <div className="container mx-auto">
            <p className="font-bold text-xl">Monitö</p>
            <p className="text-sm">Pets is Best</p>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
              <p className="text-sm">© 2024 Monitö. All rights reserved.</p>
              <div className="flex space-x-4 text-sm mt-2 md:mt-0">
                <a href="#" className="hover:underline">Terms of Service</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
