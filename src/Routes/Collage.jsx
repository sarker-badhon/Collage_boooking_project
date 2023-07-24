import React, { useState,useEffect } from "react";
import CollegeCard from "../Routes/CollegeCard";
import CollegeDetails from "../Routes/CollegeDetails";


const Collage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [collegesData, setCollegesData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/college_card")
    .then(res=>res.json())
    .then(data=>setCollegesData(data))
  },[])

  const handleDetailsClick = (college) => {
    setSelectedCollege(college);
  };

 

  return (
    <div className="college-route bg-base-200 pb-10">
      <div className="hero h-80" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.ndAuhnhAtmfUg_KdatCvEwHaEo?pid=ImgDet&rs=1)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Collage</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-blue-900 text-white hover:text-black">Read More</button>
          </div>
        </div>
      </div>
      <div className="college-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-16">
        {collegesData.map((college, index) => (
          <CollegeCard
            key={index}
            college={college}
            onClick={() => handleDetailsClick(college)}
          />
        ))}
      </div>
      {selectedCollege && <CollegeDetails college={selectedCollege} />}
    </div>
  );
};

export default Collage;