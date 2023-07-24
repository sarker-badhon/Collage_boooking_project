import React, { useState } from "react";
import CollegeCard from "../Routes/CollegeCard";
import CollegeDetails from "../Routes/CollegeDetails";
import camp_2 from '../assets/camp_2.jpg'

const collegesData = [
  {
    image: "camp_2",
    name: "Example College 1",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 120,
    events: ["Annual Fest", "Tech Symposium", "Cultural Night"],
    sportsFacilities: ["Football Ground", "Basketball Court", "Gymnasium"],
  },
  {
    image: "camp_2",
    name: "Example College 1",
    rating: 4.5,
    admissionDate: "August 2023",
    researchCount: 120,
    events: ["Annual Fest", "Tech Symposium", "Cultural Night"],
    sportsFacilities: ["Football Ground", "Basketball Court", "Gymnasium"],
  },
  {
    image: "camp_2",
    name: "Example College 2",
    rating: 4.2,
    admissionDate: "September 2023",
    researchCount: 90,
    events: ["Freshers Party", "Hackathon", "Literary Meet"],
    sportsFacilities: ["Cricket Ground", "Tennis Court", "Swimming Pool"],
  },
  {
    image: "college3.jpg",
    name: "Example College 3",
    rating: 4.8,
    admissionDate: "October 2023",
    researchCount: 150,
    events: ["Cultural Fest", "Science Exhibition", "Alumni Meet"],
    sportsFacilities: ["Volleyball Court", "Badminton Court", "Athletics Track"],
  },
  {
    image: "college4.jpg",
    name: "Example College 4",
    rating: 4.3,
    admissionDate: "November 2023",
    researchCount: 100,
    events: ["Tech Conference", "Dance Competition", "Singing Contest"],
    sportsFacilities: ["Soccer Field", "Table Tennis Room", "Yoga Studio"],
  },
  {
    image: "college5.jpg",
    name: "Example College 5",
    rating: 4.7,
    admissionDate: "December 2023",
    researchCount: 200,
    events: ["Annual Sports Day", "Debate Competition", "Music Festival"],
    sportsFacilities: ["Hockey Ground", "Chess Room", "Fitness Center"],
  },
];

const Collage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

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