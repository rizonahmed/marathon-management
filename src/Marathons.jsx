import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Marathons = () => {
    const [marathons, setMarathons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all marathons from the server
        axios.get('http://localhost:5000/allMarathons')
            .then((response) => {
                setMarathons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching marathons:', error.message);
            });
    }, []);

    const handleSeeDetails = (id) => {
        navigate(`/marathons/${id}`);
    };

    return (
        <div className="my-10 w-11/12 mx-auto md:w-9/12 ">
            <h2 className="text-2xl font-bold text-center mb-8">Marathon Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div 
                        key={marathon._id} 
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
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
                            <Link to={`/details/${marathon._id}`}><button 
                                onClick={() => handleSeeDetails(marathon.id)} 
                                className="mt-3 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                            >
                                See Details
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marathons;
