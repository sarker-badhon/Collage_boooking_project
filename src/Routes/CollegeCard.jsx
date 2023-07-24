import React, { useState } from "react";
import camp_2 from '../assets/camp_2.jpg'
import CollegeModal from "../Routes/CollegeModal";
const CollegeCard = ({ college }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { image, name, rating, admissionDate, researchCount } = college;

  const handleDetailsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card w-full bg-gray-700 text-white ">
      <figure><img className="w-full h-full" src={camp_2} alt="" /></figure>
      <div className="card-body">
        <h2>{name}</h2>
        <p>Admission Date: {admissionDate}</p>
        <p>Research Count: {researchCount}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-center ">
          <button className="btn bg-blue-950 text-white hover:text-blue-900 w-full" onClick={handleDetailsClick}>Details</button>
        </div>
      </div>
      {isModalOpen && (
        <CollegeModal college={college} onClose={handleCloseModal} />
      )}
    </div>




    // <div className="card lg:card-side bg-base-100 shadow-xl">
    //   <figure><img className="w-full h-full" src={camp_2} alt="Album" /></figure>
    //   <div className="card-body">
    //   <h2>{name}</h2> 
    //    <p>Rating: {rating}</p>
    //    <p>Admission Date: {admissionDate}</p>
    //  <p>Research Count: {researchCount}</p>

    //     <div className="card-actions justify-end">
    //       <button>Listen</button>
    //       <button  className="btn btn-primary" onClick={() => console.log("View Details")}>Details</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CollegeCard;
