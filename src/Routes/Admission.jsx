// import React, { useState } from 'react';

// function Admission() {

//     const [candidateName, setCandidateName] = useState('');
//     const [subject, setSubject] = useState('');
//     const [candidateEmail, setCandidateEmail] = useState('');
//     const [candidatePhone, setCandidatePhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');
//     const [imageFile, setImageFile] = useState(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Here you can add code to submit the form data to a server or perform any other action you want
//     };


//     return (
//         <div className='bg-base-200 py-10'>
//             <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg my-10 ">
//                 <h2 className='text-2xl font-bold mb-8'>Admission Form</h2>
//                 <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
//                             Select Collage :
//                         </label>
//                         <select className="select select-bordered w-[380px]">
//                             <option disabled selected>Choice Collage</option>
//                             <option>Oxford University - United Kingdom</option>
//                             <option>California Institute of Technology (Caltech) - USA</option>
//                             <option>Harvard University - USA</option>
//                             <option>Stanford University - USA</option>
//                         </select>
//                     </div>
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>


//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateName">
//                             Candidate Name:
//                         </label>
//                         <input
//                             type="text"
//                             id="candidateName"
//                             value={candidateName}
//                             onChange={(event) => setCandidateName(event.target.value)}
//                             className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="subject">
//                             Subject:
//                         </label>
//                         <input
//                             type="text"
//                             id="subject"
//                             value={subject}
//                             onChange={(event) => setSubject(event.target.value)}
//                             className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="candidateEmail">
//                             Candidate Email:
//                         </label>
//                         <input
//                             type="email"
//                             id="candidateEmail"
//                             value={candidateEmail}
//                             onChange={(event) => setCandidateEmail(event.target.value)}
//                             className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
//                         />
//                     </div>







//                


//                     

//                     

//                     <div className="mb-4 ">
//                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="address">
//                             Address:
//                         </label>
//                         <textarea
//                             id="address"
//                             value={address}
//                             onChange={(event) => setAddress(event.target.value)}
//                             className="border border-gray-300 rounded-md w-[380px]  py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
//                         />
//                     </div>

//                 </div>
//                 <div className="flex justify-center ">
//                     <button
//                         type="submit"
//                         className="bg-blue-950 hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 "
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>

//         </div>
//     );
// }


// export default Admission;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Admission = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
       
        console.log(data);
        fetch('http://localhost:5000/admission', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg my-10"
        >
            <h2 className="text-2xl font-bold mb-8">Admission Form</h2>


            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-left"
                    htmlFor="collegeSelect"
                >
                    Select College:
                </label>
                <Controller
                    name="selectedCollege"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Please select a college' }}
                    render={({ field }) => (
                        <select
                            id="collegeSelect"
                            {...field}
                            className="select select-bordered w-[380px]"
                        >
                            <option disabled value="">
                                Choice College
                            </option>
                            <option value="Oxford University - United Kingdom">
                                Oxford University - United Kingdom
                            </option>
                            <option value="California Institute of Technology (Caltech) - USA">
                                California Institute of Technology (Caltech) - USA
                            </option>
                            <option value="Harvard University - USA">Harvard University - USA</option>
                            <option value="Stanford University - USA">Stanford University - USA</option>
                        </select>
                    )}
                />
                {errors.selectedCollege && (
                    <p className="text-red-500 text-sm mt-1">{errors.selectedCollege.message}</p>
                )}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              
                {/* Candidate Name */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="candidateName"
                    >
                        Candidate Name:
                    </label>
                    <Controller
                        name="candidateName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Candidate name is required' }}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="candidateName"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.candidateName && (
                        <p className="text-red-500 text-sm mt-1">{errors.candidateName.message}</p>
                    )}
                </div>

                {/* Subject */}
            

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="SubjectName"
                    >
                        Subject Name:
                    </label>
                    <Controller
                        name="SubjectName"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Subject name is required' }}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="SubjectName"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.candidateName && (
                        <p className="text-red-500 text-sm mt-1">{errors.candidateName.message}</p>
                    )}
                </div>


                {/* Candidate Email */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="candidateEmail"
                    >
                        Candidate Email:
                    </label>
                    <Controller
                        name="candidateEmail"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Candidate email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        }}
                        render={({ field }) => (
                            <input
                                type="email"
                                id="candidateEmail"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.candidateEmail && (
                        <p className="text-red-500 text-sm mt-1">{errors.candidateEmail.message}</p>
                    )}
                </div>

                {/* Candidate Phone number */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="candidatePhone"
                    >
                        Candidate Phone number:
                    </label>
                    <Controller
                        name="candidatePhone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Candidate phone number is required',
                            pattern: {
                                value: /^[0-9+\-() ]*$/,
                                message: 'Invalid phone number',
                            },
                        }}
                        render={({ field }) => (
                            <input
                                type="tel"
                                id="candidatePhone"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.candidatePhone && (
                        <p className="text-red-500 text-sm mt-1">{errors.candidatePhone.message}</p>
                    )}
                </div>

                {/* Image */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="imageFile"
                    >
                        Image:
                    </label>
                    <Controller
                        name="image"
                        control={control}
                        defaultValue={null}
                        // rules={{
                        //     validate: {
                        //         fileRequired: (value) => !!value || 'Image is required',
                        //         // fileFormat: (value) => {
                        //         //     if (value) {
                        //         //         const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
                        //         //         return supportedFormats.includes(value[0]?.type) || 'Invalid file format';
                        //         //     }
                        //         //     return true;
                        //         },
                        //     },
                        // }}
                        render={({ field }) => (
                            <input
                                type="file"
                                id="imageFile"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.imageFile && (
                        <p className="text-red-500 text-sm mt-1">{errors.imageFile.message}</p>
                    )}
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="dateOfBirth"
                    >
                        Date of Birth:
                    </label>
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Date of Birth is required' }}
                        render={({ field }) => (
                            <input
                                type="date"
                                id="dateOfBirth"
                                {...field}
                                className="border border-gray-300 rounded-md w-full py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.dateOfBirth && (
                        <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                    )}
                </div>

                {/* Address */}
                <div className="mb-4 ">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2 text-left"
                        htmlFor="address"
                    >
                        Address:
                    </label>
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Address is required' }}
                        render={({ field }) => (
                            <textarea
                                id="address"
                                {...field}
                                className="border border-gray-300 rounded-md w-[380px]  py-2 px-3 mt-1 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        )}
                    />
                    {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                    )}
                </div>


            </div>

            {/* submit button */}
            <div className="flex justify-center ">
                <button
                    type="submit"
                    className="bg-blue-950 hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Admission;
