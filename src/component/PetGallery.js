import React, { useState, useEffect } from "react";
import PetCard from "./PetCards";

const PetGallery = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        setPets(data);
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
    <div className="grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-2 p-4">
      {pets.map((pet, index) => (
        <PetCard key={index} pet={pet} />
      ))}
    </div>
  );
};

export default PetGallery;
