import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TbHandFinger } from 'react-icons/tb';

const Dashboard = () => {
    return (
        <div className='my-8 w-11/12 mx-auto grid grid-cols-12 gap-3 md:gap-10'>
            <Helmet>
                <title>Dashboard/Champion Marathons</title>
            </Helmet>
              <div className=' mt-3 col-span-3 '>
               <p> <NavLink className='block p-2 mb-5 border text-center rounded-xl text-xs  md:text-base'  to="/dashboard/addMarathon">Add Marathon </NavLink></p>
               <p> <NavLink className='block mb-5 p-2 border text-center rounded-xl  text-xs  md:text-base' to="/dashboard/marathonList">My Marathon list </NavLink></p>
                <p><NavLink className='block p-2 border text-center rounded-xl  text-xs  md:text-base' to="/dashboard/applyList"> My apply list</NavLink></p>

                <p  className='  pt-8 md:12 text-2xl  text-lime-700 flex justify-center'>
                    <TbHandFinger></TbHandFinger>
                </p>
                <p className='block  text-center text-green-600 font-bol  text-xs  md:text-lg italic' >  Click the buttons  </p>
              </div>
              <div  className='  col-span-9'>
               <Outlet></Outlet>
              </div>
        </div>
    );
};

export default Dashboard;