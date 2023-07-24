import React from 'react';

const CollegeGalleryCard = ({ College }) => {
 
    const { image, name, rating, admissionDate, researchCount } = College;

    const handleDetailsClick = (college) => {
        setSelectedCollege(college);
      };

    return (
        <div className="card w-full bg-gray-700 text-white ">
        <figure><img className="w-full h-[200px] object-cover" src={image} alt="" /></figure>
        <div className="card-body">
          <h2>{name}</h2>
          <p>Admission Date: {admissionDate}</p>
          <p>Research Count: {researchCount}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-center ">
            <button className="btn bg-blue-950 text-white hover:text-blue-900 w-full" onClick={handleDetailsClick}>Details</button>
          </div>
        </div>
      </div>
  
    );
};

export default CollegeGalleryCard;