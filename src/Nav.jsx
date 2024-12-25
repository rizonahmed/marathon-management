import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { RiMenu2Fill } from "react-icons/ri";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const Nav = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    icon: "error",
                    title: "Sign Out Successfully",
                    text: "Login again for all features!",
                });
            })
            .catch((error) => {
            });
    };





    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };






    return (
        <div className='sticky top-0 z-10 bg-[#1f1e1e13] border-b backdrop-blur-3xl'>
            <div className="navbar w-full md:w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <RiMenu2Fill className="h-5 w-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li className='my-1 border-2 rounded-xl'>
                                <NavLink to="/"> <button> Home</button></NavLink>
                            </li>
                            <li className='my-1 border-2 rounded-xl'>
                                <NavLink to="/marathons"> <button> Marathons</button></NavLink>
                            </li>
                            <li className='my-1 border-2 rounded-xl'>
                                <NavLink to="/services"> <button> Our Services</button></NavLink>
                            </li>
                            <li className='my-1 border-2 rounded-xl'>
                                <NavLink to="/about"> <button> About Us</button></NavLink>
                            </li>
                            {user && (
                                <li className='my-1 border-2 rounded-xl'>
                                    <NavLink to="/dashboard/addMarathon"> <button> Dashboard</button></NavLink>
                                </li>
                            )}

                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src="https://www.pngkey.com/png/full/918-9189472_11-marathon-logo.png" alt="Logo" className="w-12 h-10 md:w-20 md:h-16" />
                        <h2 className='md:text-2xl font-bold'> Champions</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-1 border-2 rounded-xl'>
                            <NavLink to="/"> <button> Home</button></NavLink>
                        </li>
                        <li className='mx-1 border-2 rounded-xl'>
                            <NavLink to="/marathons"> <button> Marathons</button></NavLink>
                        </li>
                        <li className='mx-1 border-2 rounded-xl'>
                            <NavLink to="/services"> <button> Our Services</button></NavLink>
                        </li>
                        <li className='mx-1 border-2 rounded-xl'>
                            <NavLink to="/about"> <button> About Us</button></NavLink>
                        </li>
                        {user && (
                            <li className='mx-1 border-2 rounded-xl'>
                                <NavLink to="/dashboard/addMarathon"> <button> Dashboard</button></NavLink>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="navbar-end gap-2">
                  
                    <>
                        <button
                            className="btn btn-sm  "
                            onClick={toggleTheme}
                            aria-label="Toggle Theme"
                        >
                            {theme === "light" ? (
                                <span>🌙 </span>
                            ) : (
                                <span>☀️</span>
                            )}
                        </button>
                    </>


                    {user ? (
                        <div className='flex items-center gap-3'>
                            <img
                                data-tooltip-id="user-tooltip"
                                data-tooltip-content={user?.displayName || "User"}
                                className='md:w-16 md:h-16 w-10 rounded-full'
                                src={user?.photoURL}
                                alt="User"
                            />
                            <Tooltip id="user-tooltip" place="top" effect="solid" />
                            <button
                                onClick={handleSignOut}
                                className="mt-2 bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-xs md:text-base px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className='btn bg-gradient-to-r from-gray-600 to-teal-500 text-white'> Login</button>
                            </Link>
                            <Link to="/register">
                                <button className='btn bg-gradient-to-r from-teal-500 to-gray-600 text-white'> Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
