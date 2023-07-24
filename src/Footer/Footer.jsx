import React from 'react';
import { FaCheck, FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-blue-950 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='text-left ml-10'>
                    <h2 className="text-white font-bold text-xl mb-4" >Useful Links</h2>
                    <Link>
                        <p className="text-white flex items-center"> 
                        <FaGreaterThan className='mr-2 text-sm' />Campus Forms</p>
                    </Link>
                    <Link>
                        <p className="text-white flex items-center">
                        <FaGreaterThan className='mr-2 text-sm ' />Campus Respository</p>
                    </Link>
                    <Link>
                        <p className="text-white flex items-center">
                        <FaGreaterThan className='mr-2 text-sm' />Campus Barta  </p>
                    </Link>
                    <Link>
                        <p className="text-white flex items-center">
                        <FaGreaterThan className='mr-2 text-sm' />Campus Library  </p>
                    </Link>
                    <Link>
                        <p className="text-white flex items-center">
                        <FaGreaterThan className='mr-2 text-sm' />Contacts For Services  </p>
                    </Link>
                    </div>
                    <div className='text-left'>
                        <h4 className="text-white">Contact Us</h4>
                        <p className="text-white mt-4">Email: info@campus.com</p>
                        <p className="text-white">Phone: +1 123-456-7890</p>
                    </div>
                    <div className='text-left '>
                        <h4 className="text-white ">Location</h4>
                        <p className="text-white mt-4">Dhaka Building (Ground Floor)</p>
                        <p className="text-white">Dhaka-4000, Bangladesh</p>
                    </div>
                </div>
                <hr className="my-8 border-white" />
                <div className="text-center">
                    <p className="text-white">&copy; 2023 Campus Book. All rights reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;