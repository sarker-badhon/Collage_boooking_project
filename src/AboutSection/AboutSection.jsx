import React from 'react';

const AboutSection = () => {
  return (
    <section className="flex justify-between items-center p-8 bg-base-200 py-20">
      <div className="w-1/2">
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nq5dRqm1N3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="w-1/2 px-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Campus </h2>
        <p className="text-gray-600 text-left">
        On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog as the first Vice-Chancellor of the University. The University was set up in a picturesque part of the city known as Ramna on 600 acres of land.The University started its activities with 3 Faculties,12 Departments, 60 teachers, 877 students and 3 dormitories (Halls of Residence) for the students. At present the University consists of 13 Faculties, 83 Departments, 12 Institutes, 20 residential halls, 3 hostels and more than 56 Research Centres. The number of students and teachers has risen to about 37018 and 1992 respectively.The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.
        </p>
        <button className="mt-4 bg-blue-950 hover:bg-blue-900 w-full text-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
