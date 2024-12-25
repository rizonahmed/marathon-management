import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');  // Default sorting order
    const navigate = useNavigate();

    // Fetch marathons based on the selected sort order
    useEffect(() => {
        axios.get(`http://localhost:5000/allMarathons?sortOrder=${sortOrder}` , {withCredentials:true})
            .then((response) => {
                setMarathons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching marathons:', error.message);
            });
    }, [sortOrder]);  // Re-fetch when the sortOrder changes

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);  // Update the sort order based on user selection
    };

    const handleSeeDetails = (id) => {
        navigate(`/marathons/${id}`);
    };

    return (
        <div className="my-10 w-11/12 mx-auto md:w-9/12">
            <Helmet>
                <title>Marathons/Champion Marathons</title>
            </Helmet>
            <h2 className="text-4xl font-bold text-center mb-8">  <h1 className="mb-5 text-4xl font-bold ">
                <span style={{ fontWeight: 'bold' }}>
                    <Typewriter
                        words={['All Marathon Events']}
                        loop={Infinity}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={40}
                        delaySpeed={1000}
                    />
                </span>
            </h1></h2>

            <div className="mb-6 flex items-center justify-center md:justify-start">
                <label htmlFor="sortOrder" className="mr-4 text-lg font-semibold ">View by Date:</label>
                <div className="relative w-64">
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="block appearance-none w-full bg-gradient-to-r from-gray-600 to-teal-500 text-white font-medium py-3 px-4 pr-12 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-teal-500 hover:to-gray-600 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-700 transition-all duration-300 ease-in-out"
                    >

                        <option className="text-black bg-gray-100 hover:bg-teal-100 rounded-md" value="asc">Newest to Oldest</option>
                        <option className="text-black bg-gray-100 hover:bg-teal-100" value="desc">Oldest to Newest</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <MdKeyboardArrowDown className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div key={marathon._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={marathon.marathonImageUrl}
                            alt={marathon.marathonTitle}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{marathon.marathonTitle}</h3>
                            <p className="text-gray-600 mb-2">
                                <strong>Location:</strong> {marathon.location}
                            </p>
                            <p className="text-gray-600 mb-2">
                                <strong>Registration:</strong> {new Date(marathon.registrationStartDate).toLocaleDateString()} - {new Date(marathon.registrationEndDate).toLocaleDateString()}
                            </p>
                            <Link to={`/details/${marathon._id}`}>
                                <button
                                    onClick={() => handleSeeDetails(marathon._id)}
                                    className="mt-3 w-full bg-gradient-to-r from-gray-600 to-teal-500 hover:from-teal-500 hover:to-gray-600  font-semibold text-white py-2 rounded-lg hover:bg-teal-700 transition"
                                >
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marathons;
