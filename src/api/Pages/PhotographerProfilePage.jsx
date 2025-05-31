import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PhotographerProfilePage = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);


  useEffect(() => {
    axios.get('/photographer.json')
      .then((res) => {
        const found = res.data.photographers.find(p => p.id === Number(id));
        setPhotographer(found);
      })
      .catch(err => console.error("Error fetching profile", err));
  }, [id]);

  if (!photographer) return <p className="text-center  mt-10">Loading Profile...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{photographer.name}</h1>
      <img src={photographer.profilePic} className="w-full h-72 object-cover rounded" alt="" />
      <p className="my-3">{photographer.bio}</p>
      <p>Price: ₹ {photographer.price}</p>
      <p>Rating: ⭐ {photographer.rating}</p>
      <h3 className="text-xl font-bold mt-5">Gallery</h3>
      <div className="grid grid-cols-2 gap-3 mt-2">
        {photographer?.portfolio?.map((img, i) => (
          <img key={i} src={img}  className="rounded w-full" alt="img" />
        ))}
      </div>
      <h3 className="text-xl font-bold mt-5">Reviews</h3>
      {photographer?.reviews?.map((review, i) => (
        <div key={i} className="border p-3 my-2 rounded">
          <p className="font-bold">{review.name} ⭐ {review.rating}</p>
          <p>{review.comment}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotographerProfilePage;
