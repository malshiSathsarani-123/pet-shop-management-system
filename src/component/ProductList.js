import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-0'>
      <div>
        <button className="absolute right-20 bg-transparent border-2 border-blue-900 text-gray-700 px-2 h-9 rounded-full">
          View more
        </button>
      </div>
      <div className='mt-10 m-0'>
        <h1 className='text-sm font-bold text-blue-900 ml-16'>What's new?</h1>
        <h1 className='font-bold text-blue-900 ml-16 text-2xl'>Take A Look At Some Of Our Pets</h1>
      </div>
      <div className="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
