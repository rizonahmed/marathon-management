import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ApplyList = () => {
    const { user } = useContext(AuthContext);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    useEffect(() => {
        if (!user) {
            setError('User is not logged in');
            setLoading(false);
            return;
        }

        const fetchApplications = async () => {
            try {
                const response = await axios.get(
                    ` http://localhost:5000/applyList?email=${user?.email}`,
                    { withCredentials: true }
                );
                setApplications(response.data);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError('Failed to fetch applications');
                setLoading(false);
            }
        };

        fetchApplications();
    }, [user]);

    const handleUpdate = (application) => {
        setSelectedApplication(application);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const updatedDetails = {
            additionalInfo: e.target.additionalInfo.value,
        };
    
        try {
            const response = await axios.put(
                ` http://localhost:5000/applyList/${selectedApplication._id}`,
                updatedDetails,
                { withCredentials: true }
            );
            const updatedApplication = response.data;
    
            setApplications((prevApplications) =>
                prevApplications.map((app) =>
                    app._id === updatedApplication._id ? updatedApplication : app
                )
            );
    
            // Close the modal
            setIsUpdateModalOpen(false);
    
            Swal.fire('Success!', 'Details updated successfully.', 'success');
        } catch (error) {
            Swal.fire('Error!', 'Failed to update details.', 'error');
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(` http://localhost:5000/deleted/${id}`, { withCredentials: true })
                    .then(() => {
                        setApplications(applications.filter((app) => app._id !== id));
                        Swal.fire('Deleted!', 'Your registration has been removed.', 'success');
                    })
                    .catch((error) => {
                        Swal.fire('Error!', 'Failed to delete the registration.', 'error');
                    });
            }
        });
    };

    if (loading) return <div className="text-center  text-3xl"><span className="loading loading-ring loading-lg text-lime-600"></span></div>;
    if (error) return <div className="text-red-600">{error}</div>;

    return (
        <div className="container mx-auto mb-20 p-6">
            <Helmet>
                <title>My Applications / Champion Marathons</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-6">My Applications</h2>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
                        <tr>
                            <th className="py-3 px-6 text-center ">#</th>
                            <th className="py-3 px-6 text-center ">Marathon Title</th>
                            <th className="py-3 px-6 text-center ">Start Date</th>
                            <th className="py-3 px-6 text-center ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0 ? (
                            applications.map((application, index) => (
                                <tr
                                    key={application._id}
                                    className="hover:bg-gray-100 transition duration-300 ease-in-out border-t border-b"
                                >
                                    <td className="py-3 px-6 text-center text-black">{index + 1}</td>
                                    <td className="py-3 px-6 text-center text-black">{application.marathonTitle}</td>
                                    <td className="py-3 px-6 text-center text-black">
                                        {new Date(application.marathonStartDate).toLocaleDateString()}
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            className="mb-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                                            onClick={() => handleUpdate(application)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 ml-3 rounded-md hover:bg-red-600 transition duration-200"
                                            onClick={() => handleDelete(application._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4 px-6 text-gray-500">
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isUpdateModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4">Update Registration Details</h3>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Marathon Title:</label>
                                <input
                                    type="text"
                                    value={selectedApplication?.marathonTitle}
                                    readOnly
                                    className="w-full p-2 border rounded-md bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Start Date:</label>
                                <input
                                    type="text"
                                    value={new Date(selectedApplication?.marathonStartDate).toLocaleDateString()}
                                    readOnly
                                    className="w-full p-2 border rounded-md bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-1">Additional Information:</label>
                                <input
                                    type="text"
                                    name="additionalInfo"
                                    defaultValue={selectedApplication?.additionalInfo || ''}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-300 px-4 py-2 rounded mr-2"
                                    onClick={() => setIsUpdateModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplyList;
