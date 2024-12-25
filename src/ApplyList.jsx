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
    const [searchTerm, setSearchTerm] = useState('');  

     useEffect(() => {
        const fetchApplications = async () => {
            if (!user) {
                setError('User is not logged in');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:5000/applyList?email=${user?.email}&search=${searchTerm}`);
                setApplications(response.data);
                setError(null);  
            } catch (error) {
                console.error('Error fetching applications:', error);
                setError('Failed to fetch applications');
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [user, searchTerm]);  

    const handleUpdate = async (id) => {
        const updatedStatus = prompt('Enter the new status:');
        if (!updatedStatus) return;

        try {
            const response = await axios.put(`http://localhost:5000/applications/${id}`, {
                status: updatedStatus,
            });
            setApplications(applications.map(app => (app._id === id ? response.data : app)));
            Swal.fire('Success!', 'Application updated successfully.', 'success');
        } catch (error) {
            console.error('Error updating application:', error);
            Swal.fire('Error!', 'Failed to update application.', 'error');
        }
    };

    // Handle application deletion
    const deleteData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`http://localhost:5000/deleted/${id}`)
                    .then(() => {
                        Swal.fire('Deleted!', 'Your application has been deleted.', 'success');
                        setApplications(applications.filter(app => app._id !== id));
                    })
                    .catch((error) => {
                        console.error('Error deleting application:', error);
                        Swal.fire('Error!', 'Failed to delete the application.', 'error');
                    });
            }
        });
    };

    if (loading) return <div className="text-center text-gray-700 text-3xl"><span className="loading loading-ring loading-lg text-lime-600"></span></div>;
    if (error) return <div className="text-red-600">{error}</div>;

    return (
        <div className="container mx-auto mb-20 p-6">
            <Helmet>
                <title>Apply List / Champion Marathons</title>
            </Helmet>

            <h2 className="text-center text-3xl font-semibold mb-6">My Apply List</h2>

            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}  
                    placeholder="Search by marathon title..."
                    className="w-full p-3 border rounded-md"
                />
            </div>

            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full table-auto bg-white rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
                        <tr>
                            <th className="py-3 px-6 text-center">#</th>
                            <th className="py-3 px-6 text-center">Marathon Title</th>
                            <th className="py-3 px-6 text-center">Start Date</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0 ? (
                            applications.map((application, index) => (
                                <tr key={application._id} className="hover:bg-gray-100 transition duration-300 ease-in-out border-t border-b">
                                    <td className="py-3 px-6 text-center">{index + 1}</td>
                                    <td className="py-3 px-6 text-center">{application.marathonTitle}</td>
                                    <td className="py-3 px-6 text-center">{new Date(application.marathonStartDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-6 text-center">
                                        <button
                                            className="bg-blue-500 mb-2 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                                            onClick={() => handleUpdate(application._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 ml-3 rounded-md hover:bg-red-600 transition duration-200"
                                            onClick={() => deleteData(application._id)}
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
        </div>
    );
};

export default ApplyList;
