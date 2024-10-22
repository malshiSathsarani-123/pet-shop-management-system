import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72 h-80 mb-5">
      <div className="flex justify-center items-center">
        <img
          src={pet.image || "https://via.placeholder.com/150"} // Placeholder if image is missing
          alt={pet.name || "Pet"}
          className="w-64 h-52 object-cover rounded-[10px]"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{pet.breed || "Unknown"}</h2>
        <p className="text-sm text-gray-500">Age: {pet.age ? `${pet.age} months` : "N/A"}</p>
        <p className="text-sm text-gray-500">Price: {pet.price ? `${pet.price} VND` : "N/A"}</p>
      </div>
    </div>
  );
};

export default PetCard;
