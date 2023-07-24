import React, { useState } from 'react';

const DreamCollege = () => {
    const [preferences, setPreferences] = useState({
        location: '',
        fieldOfStudy: '',
        campusSize: '',
        programs: [],
      });
    
      const [colleges, setColleges] = useState([]);
    
      const handleSearch = (e) => {
        e.preventDefault();
        
        const dummyColleges = [
          {
            name: 'Example University',
            location: 'City A, State X',
            fieldOfStudy: 'Computer Science',
            campusSize: 'Medium',
            programs: ['Engineering', 'Information Technology'],
          },
          {
            name: 'Sample College',
            location: 'City B, State Y',
            fieldOfStudy: 'Business Administration',
            campusSize: 'Large',
            programs: ['Finance', 'Marketing'],
          },
          // Add more dummy data here as needed
        ];
    
        setColleges(dummyColleges);
      };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Find Your Dream College</h1>
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={preferences.location}
              onChange={(e) => setPreferences({ ...preferences, location: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Field of Study:</label>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={preferences.fieldOfStudy}
              onChange={(e) => setPreferences({ ...preferences, fieldOfStudy: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Campus Size:</label>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={preferences.campusSize}
              onChange={(e) => setPreferences({ ...preferences, campusSize: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Programs of Interest:</label>
            <input
              type="text"
              className="form-input mt-1 block w-full"
              value={preferences.programs.join(', ')}
              onChange={(e) =>
                setPreferences({ ...preferences, programs: e.target.value.split(', ') })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Search
          </button>
        </form>

        {/* Display the list of matched colleges */}
        {colleges.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Matching Colleges:</h2>
            <ul>
              {colleges.map((college, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{college.name}</h3>
                  <p>Location: {college.location}</p>
                  <p>Field of Study: {college.fieldOfStudy}</p>
                  <p>Campus Size: {college.campusSize}</p>
                  <p>Programs: {college.programs.join(', ')}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DreamCollege;
