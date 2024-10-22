import React from "react";
import 'swiper/css';  
import 'swiper/css/pagination';  
import 'swiper/css/navigation'; 
import image from '../img/image.png'; 
import image2 from '../img/image2.png'
import PetGallery from '../component/PetGallery';
import { Link } from "react-router-dom";
import play from '../img/play.png';

function HeroComponent(){
    return(
        <div className="mainCntainer mb-40 relative ">
            <div id='hero_banner' className=" overflow-y-hidden h-screen flex flex-col ">
            <nav className="w-full  bg-transparent py-4 px-20 flex items-center justify-between">
  <div className="text-2xl font-bold text-blue-900">Monito</div>

  <nav className="space-x-10">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/category" className="text-gray-700 hover:text-blue-600">Category</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </nav>

  <div className="flex items-center space-x-4">
    <div className="flex items-center bg-white border rounded-full shadow-md p-2 w-72">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 text-gray-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search something here!"
        className="ml-2 w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
      />
    </div>

    <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
      Join the community
    </button>
    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full">
      VND
    </button>
  </div>
    </nav>
 <div className="flex" >
    <div className="  mr-80">
        <img src={image} alt="Main" className=" mainImage mt-1 " />
    </div>

     </div>
     <div className="flex flex-col  mt-16  w-[400px] mainFot" >
       <h1 className="text-7xl font-bold text-blue-900 mb-4  w-[600px]">One More Friend</h1>
       <h1 className="text-5xl font-bold text-blue-900 mb-4  w-[600px]"> Thousands   More   Fun!</h1>
       <p className="">
         Having a pet means you have more joy, one new friend, a happy person who will always be with you to have fun.
         We have 200+ different pets that can meet your needs!
       </p>
       </div>
       <div className='flex space-x-3'>
       <div className="flex space-x-4 ml-28 mt-4">
       <button className="bg-transparent text-black py-2 px-6 rounded-full border-2 border-blue-900 ">  <div className="ml-24 top-5 relative "><img src={play} alt="play" className="w-4 h-4  "></img></div>View Intro</button>
         <button className="bg-blue-900 text-gray-50	 py-2 px-6 rounded-full">Explore Now</button>
       </div>
     </div>
   </div>
   <div>
   
 
   <button className="  absolute mt-16  right-40 bg-transparent border-2 border-blue-900 text-gray-700 mb-16 px-2 h-9 rounded-full ">
   View more</button>
   </div>
   < div className=' mt-42 absolute m-0  ' > 
         <h1 className='  text-sm font-bold text-blue-900 ml-28  mt-10 '>whats new?</h1>
         <h1 className='  font-bold text-blue-900  ml-28  text-2xl'>Tacke A  Look At Some Of Our Pets</h1>
   </div>
   <div className='flex-auto ml-10 mt-28'>
           <PetGallery/>
         </div>
         <div className="flex flex-coln bg-slate-500 shadow-sm ml-16 mr-12 h-80 object-cover rounded-[20px] mt-10">
             <img src={image2} alt="Main" className=" imagetow  " />
             <section className="flex-none mt-16 mr-60 absolute"> 
             <div className="flex flex-col items-end w-auto mainFot">
                 <h1 className="text-5xl font-bold text-bl mb-4">One More Friend</h1>
                 <h1 className="text-3xl font-bold text-black	 mb-4"> Thousands More Fun!</h1>
     
     </div>
     <p className='ml-64 mr-64 relative left-96'> Having a pet means you have more joy, one new friend, a happy person who will always be with you to have fun.
     We have 200+ different pets that can meet your needs!</p>
   </section>
 </div>
        </div>
    )
}

export default HeroComponent;