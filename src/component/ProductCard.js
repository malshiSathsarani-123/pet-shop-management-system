import React from "react";
import gift from '../img/gift.png'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-[400px] mb-5  ml-10 mr-10">
      <div className="flex justify-center items-center">
        <img src={product.image} alt={product.name} className="w-64 h-30 object-cover rounded-[10px]" />
      </div>

  
      <div className="p-4 col-span-2">
      <h2 className="text-lg font-bold">{product.name}</h2> 

<p className="text-sm text-gray-500 ml-5 ab">Size: {product.age} months<p className="text-sm text-gray-500">product: {product.price} VND
<p className="text-sm text-gray-500"> {product.price} VND</p>
</p></p> 
<div className="w-[200px] h-9 bg-red-300 ml-6 rounded-lg"> 
<img src={gift} alt="gift" className="w-5"></img>
  <div className=" ">
  
  <h1 className="text-[15px] text-black ml-10 relative bottom-4 ">{product.gift}</h1>
  </div>
 
</div>
      </div>
    </div>
  );
};

export default ProductCard;
