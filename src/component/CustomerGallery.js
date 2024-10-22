import React, { useState, useEffect } from 'react';

const CustomerGallery = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 ml-5">Our lovely customers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {customers.map((customer, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={customer.image || 'https://via.placeholder.com/150'}  
              alt={customer.alt || 'Customer'}
              className="rounded-lg object-cover w-full h-60 md:h-72 lg:h-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerGallery;
