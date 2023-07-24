import React, { useState } from "react";
// import "./CollegeGallery.css";

const CollegeGallery = () => {
  const [images, setImages] = useState([
    "https://i.ibb.co/dchSt7F/OIP.jpg",
    "https://i.ibb.co/qBPffzb/Graduate-destinations-pic.jpg",
    "https://i.ibb.co/4mjc0Nj/OIP.jpg",
    "https://i.ibb.co/1dWmKdL/R.jpg",
    "https://i.ibb.co/YdTymL0/R.jpg",
    "https://i.ibb.co/c8pxbXf/R.jpg",
   
    
    // Add more image URLs here
  ]);

  return (
   <div className="bg-base-200 py-10">
    <h2 className="text-center text-3xl font-bold"> College <span className="text-blue-800">Gallery</span> </h2>
     <div className="college-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 ">
      {images.map((image, index) => (
        <img key={index} src={image} className="rounded-md h-60 w-full" alt={`College graduate ${index + 1}`} />
      ))}
    </div>
   </div>
  );
};

export default CollegeGallery;