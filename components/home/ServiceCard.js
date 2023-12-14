

import React from 'react';

const ServiceCard = ({ title, description, ctaText, imageUrl, ctaLink }) => {
  return (
    <div className="bg-white p-10 py-px-10 shadow-md rounded-b-lg mb-4">
      <a href={ctaLink} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="w-full h-auto mb-4 rounded-lg" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 text-xl">{description}</p>
        <button className="font-bold bg-cyan-500 text-white px-4 py-2 rounded-xl">{ctaText}</button>
      </a>
    </div>
  );
};

export default ServiceCard;


  