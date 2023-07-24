import React, { useState } from 'react';

function Admission() {

    const [candidateName, setCandidateName] = useState('');
    const [subject, setSubject] = useState('');
    const [candidateEmail, setCandidateEmail] = useState('');
    const [candidatePhone, setCandidatePhone] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add code to submit the form data to a server or perform any other action you want
    };


    return (
        <div className='bg-base-200 py-10'>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg my-10 ">
                <h2 className='text-2xl font-bold mb-8'>Admission Form</h2>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
                            Select Collage :
                        </label>
                        <select className="select select-bordered w-[380px]">
                            <option disabled selected>Choice Collage</option>
                            <option>Oxford University - United Kingdom</option>
                            <option>California Institute of Technology (Caltech) - USA</option>
                            <option>Harvard University - USA</option>
                            <option>Stanford University - USA</option>
                        </select>
                    </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
                            Candidate Name:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            value={candidateName}
                            onChange={(event) => setCandidateName(event.target.value)}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="subject">
                            Subject:
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateEmail">
                            Candidate Email:
                        </label>
                        <input
                            type="email"
                            id="candidateEmail"
                            value={candidateEmail}
                            onChange={(event) => setCandidateEmail(event.target.value)}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidatePhone">
                            Candidate Phone number:
                        </label>
                        <input
                            type="tel"
                            id="candidatePhone"
                            value={candidatePhone}
                            onChange={(event) => setCandidatePhone(event.target.value)}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="imageFile">
                            Image:
                        </label>
                        <input
                            type="file"
                            id="imageFile"
                            onChange={(event) => setImageFile(event.target.files[0])}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="dateOfBirth">
                            Date of Birth:
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(event) => setDateOfBirth(event.target.value)}
                            className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="address">
                            Address:
                        </label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            className="border border-gray-300 rounded-md w-[380px]  py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                </div>
                <div className="flex justify-center ">
                    <button
                        type="submit"
                        className="bg-blue-950 hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 "
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}


export default Admission;