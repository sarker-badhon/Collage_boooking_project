import React from "react";

const CollegeDetails = ({ college }) => {
  const { name, events, sportsFacilities } = college;

  return (
    <div className="college-details">
      <h2>{name} Details</h2>
      <h3>Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <h3>Sports Facilities</h3>
      <ul>
        {sportsFacilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeDetails;
