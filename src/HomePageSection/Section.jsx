import React from 'react';

const Section = () => {
  return (
    // Home Page Sections
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Upcoming events!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white  rounded shadow-md grid grid-cols-2">
            <h2 className="text-xl font-bold mb-2 bg-blue-950 text-white p-5 h-full w-full">Wednesday <span className="flex justify-center text-3xl">28</span> April </h2>
            <div className="p-3">

              <p className="text-xl font-bold mt-5">P&C Meeting</p>
              <p>Location: LENSE Professional Learning Space Primary Campus
                Time: 2:00 PM - 4:00 PM</p>
            </div>
          </div>
          <div className="bg-white  rounded shadow-md grid grid-cols-2">
            <h2 className="text-xl font-bold mb-2 bg-blue-950 text-white p-5 h-full w-full">Tuesday <span className="flex justify-center text-3xl">20</span> jun </h2>
            <div className="p-3">

              <p className="text-xl font-bold mt-5">Royal Queensland Show...</p>
              <p>Location: Queensland
                Time: All day (20 jun) - (24 jun)</p>
            </div>
          </div>
          <div className="bg-white  rounded shadow-md grid grid-cols-2 ">
            <h2 className="text-xl font-bold mb-2 bg-blue-950 text-white p-5 h-full  w-full">Wednesday <span className="flex justify-center text-3xl">15</span> Aug </h2>
            <div className="p-3">

              <p className="text-xl font-bold mt-5">Secondary Campus...
              </p>
              <p>Time: 11:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;