import React from 'react';
import { Link } from 'react-router-dom';

const PhotographerCard = ({ photographer }) => (
  <div className="border rounded-lg bg-gray-500 p-4 shadow-md hover:shadow-gray-500  ">
    <img src={photographer.profilePic} alt={photographer.name} className="w-full h-48 object-cover rounded" />
    <h2 className="text-xl font-bold mt-2">{photographer.name}</h2>
    <p>📍 {photographer.location}</p>
    <p>₹ {photographer.price}</p>
    <p>⭐ {photographer.rating}</p>
    <div className="flex gap-2 mt-2 flex-wrap">
      {photographer.tags.map((tag, i) => (
        <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded">{tag}</span>
      ))}
    </div>
    <Link to={`/profile/${photographer.id}`}>
      <button className="mt-3 bg-blue-500 hover:scale-95 text-white px-4 py-2 rounded">View Profile</button>
    </Link>
  </div>
);

export default PhotographerCard;
