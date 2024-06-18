'use client'; // Add this line at the top

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CarDetailsPage = ({ params }) => {
  const [car, setCar] = useState(null);
  const { id } = params;
  useEffect(() => {
    const fetchCarDetails = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setCar(data);
    };

    if (id) {
      fetchCarDetails();
    }
  }, [id]);

  const handleEditCar = () => {
    console.log('Edit car:', car);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {car ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={car.thumbnail} alt={car.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{car.title}</h1>
            <p className="text-gray-600 mb-4">{car.description}</p>
            <p className="text-2xl font-semibold mb-6">Price: ${car.price}</p>
            <div className="flex justify-between">
              <button
                onClick={handleEditCar}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Car
              </button>
              <Link href="/">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Back to Listing
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarDetailsPage;