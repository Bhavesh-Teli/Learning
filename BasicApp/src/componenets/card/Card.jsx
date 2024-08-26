import React from 'react';

const Card = ({username="Lion"}) => {
    
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/2270848/pexels-photo-2270848.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Lion"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{username}</h2>
        <p className="text-gray-600 mt-4">
          The lion is a large cat of the genus Panthera native to Africa and India. Known as the "king of the jungle," lions are apex predators and are famous for their powerful build and majestic mane.
        </p>
      </div>
    </div>
  );
};

export default Card;
