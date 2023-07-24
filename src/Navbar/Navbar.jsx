
import logo from '../assets/campus-logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-blue-900 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white  bg-blue-900">
                        <Link to="/">
                            <li><a>Home</a></li>
                        </Link>
                        <Link to="/collage">
                            <li><a>Collages</a></li>
                        </Link>
                        <Link to="/admission">
                            <li><a>Admission</a></li>
                        </Link>
                        <Link to="/myCollege">
                            <li><a>My College</a></li>
                        </Link>
                        <li>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </a>
                            <ul className="p-2 bg-blue-900">
                                <div className="form-control">
                                    <input type="text"
                                        placeholder="Search for a college..."
                                        className="input input-bordered w-24 md:w-auto text-black "
                                    />
                                </div>



                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='flex'>
                    <img className='h-8 w-24 mt-3 -mr-4' src={logo} />
                    <a className="btn btn-ghost normal-case text-xl text-white mt-2">.Booking</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white bg-blue-900 flex justify-center items-center">
                    <Link to="/" className="mr-3">
                        <li>Home</li>
                    </Link>
                    <Link to="/collage" className="mr-3">
                        <li>Collages</li>
                    </Link>
                    <Link to="/admission" className="mr-3" >
                        <li>Admission</li>
                    </Link>
                    <Link to="/myCollege" className="mr-3">
                        <li>My College</li>
                    </Link>
                    <li tabIndex={0}>
                        <details>
                            <summary>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </summary>
                            <ul className="p-2 bg-blue-900 z-50">
                                <div className="form-control">
                                    <input type="text"
                                        placeholder="Search for a college..."
                                        className="input input-bordered w-24 md:w-auto text-black " />


                                </div>



                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <h1 className="text-white font-bold mr-2">{user?.displayName}</h1>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                        </div>

                        <button onClick={handleLogOut} className='btn btn-outline text-white'>Log out</button>
                    </> : <Link className='text-white font-bold btn btn-outline' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;