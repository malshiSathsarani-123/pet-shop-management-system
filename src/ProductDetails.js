import React from 'react';
import ImageCarousel from './component/ImageCarousel';
import Product from './Product';
// import PetGallery from './component/ProductList';
import PetCard from './component/PetCards';
import Text from './component/Text'
import CustomerGallery from './component/CustomerGallery';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import image6 from './img/image6.png';
import image7 from './img/image7.png';
import image8 from './img/image8.png'
import image9 from './img/image9.png'

function ProductDetails() {
    const pets = [
        { id: "MO512", name: "Alaskan Malamute Grey", age: 2, price: "8,900,000", image:image6 },
         { id: "MO512", name: "Alaskan Malamute Grey", age: 2, price: "8,900,000", image:image7 },
        { id: "MO512", name: "Alaskan Malamute Grey", age: 2, price: "8,900,000", image: image8 },
        { id: "MO512", name: "Alaskan Malamute Grey", age: 2, price: "8,900,000", image: image9},
        
   ];
    return (
        <div>
            <Navbar/>
            <div className="flex p-8 ml-40 mr-40 shadow">
        <div className="w-2/3 pr-8">
          <ImageCarousel />
        </div>
  
        <div className="w-1/3">
          <Product />
        </div>
      </div>
      <CustomerGallery />
      <div>
        <Text />
      </div>
      <div className="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
      {pets.map((pet, index) => (
    <PetCard key={index} pet={pet} />
  ))}
</div>
<Footer />
        </div>
        
    );
  }
  
  export default ProductDetails;