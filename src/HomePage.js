import React from 'react';
import 'swiper/css';  
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';  
import './mySlider.css';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import HeroComponent from './component/HeroComponent';
import PetSellers from './component/PetSellers';
import UsefulPetKnowledge from './component/UsefulPetKnowledge';

function HomePage() {
  return (
    <div>
      <HeroComponent />
      <ProductList/>
      <PetSellers />
      <UsefulPetKnowledge />
      <Footer />
  </div>
    );
}

export default HomePage;
