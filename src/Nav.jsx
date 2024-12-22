import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';


const Nav = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then((result) => {
                Swal.fire({
                    icon: "error",
                    title: "Sign Out Successfully",
                    text: "Login again for  all feature !",
                });
            })
            .catch((error) => {

            })
    }
    return (
      <div className='sticky top-0 z-10 bg-white border-b' >
        <div className="navbar  md:w-11/12 mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className='my-1'> <NavLink to="/"> <button> Home</button></NavLink></li>
                        <li className='my-1'> <NavLink to="/marathons"> <button> Marathons </button></NavLink></li>
                        {
                            user && <li className='mx-1'> <NavLink to="/dashboard"> <button> Dashboard </button></NavLink></li>
                        }

                    </ul>
                </div>
                <div className="   flex items-center">  <img src="https://www.pngkey.com/png/full/918-9189472_11-marathon-logo.png" alt="Logo" className="w-16 h-12 md:w-20 md:h-16" /> <h2 className='md:text-2xl font-bold'> Champions</h2></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li className='mx-1'> <NavLink to="/"> <button> Home</button></NavLink></li>
                    <li className='mx-1'> <NavLink to="/marathons"> <button> Marathons </button></NavLink></li>
                    {
                        user && <li className='mx-1'> <NavLink to="/dashboard"> <button> Dashboard </button></NavLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user
                        ? <div className='flex items-center gap-3'>
                            <img
                                className='md:w-16 md:h-16 w-14  rounded-full'
                                src={user?.photoURL} alt="" />
                            <button
                                onClick={handleSignOut}
                                className="mt-2 bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-xs md:text-base px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                            >
                                Sign Out
                            </button> </div>
                        : <>  <Link to="/login"><button className='btn  bg-gradient-to-r from-gray-600 to-teal-500 text-white'> Login</button> </Link>
                            <Link to="/register"><button className='btn bg-gradient-to-r from-teal-500  to-gray-600 text-white'> Register</button> </Link>  </>
                }

            </div>
        </div>
        </div>

    );
};

export default Nav;
