import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        
        <div className="navbar  md:w-11/12 mx-auto">
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
                         
                    </ul>
                </div>
                <div className="   flex items-center">  <img src="https://www.pngkey.com/png/full/918-9189472_11-marathon-logo.png" alt="Logo" className="w-16 h-12 md:w-20 md:h-16" /> <h2 className='md:text-2xl font-bold'> Champions</h2></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                 <li className='mx-1'> <NavLink to="/"> <button> Home</button></NavLink></li>
                 <li className='mx-1'> <NavLink to="/marathons"> <button> Marathons </button></NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                  <Link to="/login"><button className='btn'> Login</button> </Link>  
                  <Link to="/register"><button className='btn'> Register</button> </Link>  
            </div>
        </div>

    );
};

export default Nav;
