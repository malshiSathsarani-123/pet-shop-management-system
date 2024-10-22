import React, { useState, useEffect } from 'react';

const SmallDog = () => {
  const [pets, setPet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setPet(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Small Dog - {pets.length} puppies</h2>
      <div className="grid grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="border rounded-lg p-4 shadow-lg">
            <img src={pet.image} alt={pet.breed} className="w-full h-40 object-cover rounded-md" />
            <h4 className="font-semibold mt-2">{pet.breed}</h4>
            <p className="text-gray-600">Gender: {pet.gender}</p>
            <p className="text-gray-600">Age: {pet.age}</p>
            <p className="font-bold text-blue-600">{pet.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallDog;
