import axios from 'axios';
import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { AuthContext } from './AuthProvider';

const AddMarathon = () => {
    const {user} = useContext(AuthContext)
    const [marathonTitle, setMarathonTitle] = useState('');
    const [registrationStartDate, setRegistrationStartDate] = useState(null);
    const [registrationEndDate, setRegistrationEndDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const [location, setLocation] = useState('');
    const [runningDistance, setRunningDistance] = useState('');
    const [description, setDescription] = useState('');
    const [marathonImageUrl, setMarathonImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const marathonDetails = {
            marathonTitle,
            registrationStartDate,
            registrationEndDate,
            marathonStartDate,
            location,
            runningDistance,
            description,
            marathonImageUrl,
            createdAt: new Date(),
            totalRegistrationCount: 0 ,
            email:user?.email
        };

        axios.post('http://localhost:5000/allMarathons', marathonDetails)
            .then((result) => {
                Swal.fire({
                    title: "Good job Marathon Added Successfully!",
                    text: "You Can Add More !",
                    icon: "success"
                });

                
                setMarathonTitle('');
                setRegistrationStartDate(null);
                setRegistrationEndDate(null);
                setMarathonStartDate(null);
                setLocation('');
                setRunningDistance('');
                setDescription('');
                setMarathonImageUrl('');
            })
            .catch((error) => {
                console.log(error.message)
            })


    };

    

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Create a Marathon Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Marathon Title</label>
                    <input
                        type="text"
                        value={marathonTitle}
                        onChange={(e) => setMarathonTitle(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-teal-500"
                        placeholder="Enter marathon title"
                        required
                    />
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Start Registration Date</label>
                        <DatePicker
                            selected={registrationStartDate}
                            onChange={(date) => setRegistrationStartDate(date)}
                            className="w-full p-3 border rounded focus:outline-teal-500"
                            placeholderText="Select start date"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">End Registration Date</label>
                        <DatePicker
                            selected={registrationEndDate}
                            onChange={(date) => setRegistrationEndDate(date)}
                            className="w-full p-3 border rounded focus:outline-teal-500"
                            placeholderText="Select end date"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Marathon Start Date</label>
                        <DatePicker
                            selected={marathonStartDate}
                            onChange={(date) => setMarathonStartDate(date)}
                            className="w-full p-3 border rounded focus:outline-teal-500"
                            placeholderText="Select marathon start date"
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-teal-500"
                        placeholder="Enter location"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Running Distance</label>
                    <select
                        value={runningDistance}
                        onChange={(e) => setRunningDistance(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-teal-500"
                        required
                    >
                        <option value="" disabled>
                            Select Distance
                        </option>
                        <option value="25k">25k</option>
                        <option value="10k">10k</option>
                        <option value="3k">3k</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-teal-500"
                        rows="5"
                        placeholder="Provide details about the marathon"
                        required
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Marathon Image URL</label>
                    <input
                        type="url"
                        value={marathonImageUrl}
                        onChange={(e) => setMarathonImageUrl(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-teal-500"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddMarathon;
