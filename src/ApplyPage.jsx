import React, { useContext, useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ApplyPage = () => {
    const { user } = useContext(AuthContext);
    const marathon = useLoaderData();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        additionalInfo: "",
    });

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    useEffect(() => {
        const now = new Date();
        const registrationStart = new Date(marathon.registrationStartDate);
        const registrationEnd = new Date(marathon.registrationEndDate);

        setIsRegistrationOpen(now >= registrationStart && now <= registrationEnd);
    }, [marathon]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registrationData = {
            ...formData,
            email: user.email,
            marathonTitle: marathon.marathonTitle,
            marathonStartDate: marathon.marathonStartDate,
        };

        try {
            const response = await axios.post("http://localhost:5000/applyList", registrationData, {withCredentials:true});

            if (response.status === 200) {
                const res = await axios.patch(`http://localhost:5000/applyListIncrement/${marathon._id}`, {withCredentials:true});
                const data = await res.data
                console.log('patch api data', data)
                Swal.fire({
                    icon: "success",
                    title: "Apply successful",
                });

                setFormData({
                    firstName: "",
                    lastName: "",
                    contactNumber: "",
                    additionalInfo: "",
                });


            } else {
                console.error("Registration failed.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

  
    return (
        <div className="w-11/12 md:max-w-3xl mx-auto my-12 p-6 border rounded-lg shadow-lg bg-slate-200">

            <Helmet>
                <title>ApplyPage/Champion Marathons</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
                Apply for {marathon?.marathonTitle}
            </h2>

            {!isRegistrationOpen && (
                <div className="text-center text-red-600 font-semibold mb-4">
                    Registration is currently closed.
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-semibold text-black mb-2">Email (Read Only)</label>
                    <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100  text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold text-black  mb-2">Marathon Title (Read Only)</label>
                    <input
                        type="text"
                        value={marathon?.marathonTitle}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold text-black  mb-2">
                        Marathon Start Date (Read Only)
                    </label>
                    <input
                        type="text"
                        value={new Date(marathon?.marathonStartDate).toLocaleDateString()}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100 text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold text-black  mb-2">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold text-black  mb-2">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold text-black  mb-2">Contact Number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-black"
                    />
                </div>

                <div className="mb-6">
                    <label className="block font-semibold  text-black mb-2">Additional Info</label>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows="4"
                        className="w-full p-3 border rounded-lg text-black"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={!isRegistrationOpen}
                    className={`w-full p-3 font-semibold rounded-lg transition ${isRegistrationOpen
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    {isRegistrationOpen ? "Submit Registration" : "Registration Closed"}
                </button>
            </form>
        </div>
    );
};

export default ApplyPage;
