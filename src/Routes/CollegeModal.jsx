import React from "react";

const CollegeModal = ({ college, onClose }) => {
  const { name, events, sportsFacilities } = college;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-2xl font-bold mb-3">{name} Details</h2>
        <h3 className="font-semibold">Events</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
        <h3 className="font-semibold mt-3">Sports Facilities</h3>
        <ul>
          {sportsFacilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CollegeModal;
