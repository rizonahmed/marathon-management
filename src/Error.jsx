import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url(https://blog-cdn.lottiefiles.com/2022/08/404-Page-Blog-Cover.png)",
        }}>
        <div className="hero-overlay bg-opacity-20"></div>
         
           <Link to="/"> <button className="btn btn-primary bg bg-white text-green-600 font-bold text-base  hover:bg-gray-50 absolute top-10 left-10">Back To Home</button>
           </Link>

           <Helmet>
                <title>Error/Champion Marathons</title>
            </Helmet>
        </div>
       
    );
};

export default Error; 