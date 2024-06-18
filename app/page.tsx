'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CarListingPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('https://dummyjson.com/products/category/vehicle');
      const data = await response.json();
      setCars(data.products);
    };

    fetchCars();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Car Listing</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <li key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/car/${car.id}`}>
              <div>
                <img src={car.thumbnail} alt={car.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{car.title}</h2>
                  <p className="text-gray-600">${car.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarListingPage;