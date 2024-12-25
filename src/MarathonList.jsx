import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MarathonList = () => {
    const { user } = useContext(AuthContext);
    const [marathons, setMarathons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMarathon, setSelectedMarathon] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!user) {
            setError('User is not logged in');
            setLoading(false);
            return;
        }

        const fetchMarathons = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/myMarathons?email=${user?.email}`, {withCredentials:true});
                setMarathons(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching marathons:', error);
                setError('Failed to fetch marathons');
            }
        };


        fetchMarathons();
    }, [user]);





    const deleteData = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {

            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/delete/${id}`, {withCredentials:true})
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        setMarathons(marathons.filter((marathon) => marathon._id !== id));
                    });
            }
        });
    };



    const handleUpdate = (marathon) => {
        setSelectedMarathon(marathon);
        setIsModalOpen(true);
    };


    const handleModalSubmit = async (updatedMarathon) => {
        const {_id, ...rest} = updatedMarathon
        // console.log(rest);
        try {
            const res = await axios.put(
                `http://localhost:5000/marathons/${updatedMarathon?._id}`,
                rest
            , {withCredentials:true});
            const data = await res?.data

            setMarathons(
                marathons.map(marathon =>
                    marathon._id === updatedMarathon._id ? updatedMarathon : marathon
                )
            );
            setIsModalOpen(false);
             Swal.fire('Success!', 'Details updated successfully.', 'success');
        } catch (error) {
            console.error('Error updating marathon:', error);
        }
    };


    if (loading) return <div className='text-center text-gray-700 text-3xl'> <span className="loading loading-ring loading-lg text-lime-600"></span> </div>
    if (error) return <div className="text-red-600">{error}</div>;

    return (
        <div className="container mx-auto mb-20 p-6">

            <Helmet>
                <title>MarathonList/Champion Marathons</title>
            </Helmet>

            <h2 className="text-center text-2xl font-semibold mb-6">My Marathons</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse table-auto">
                    <thead>
                        <tr>
                            <th className="border p-2">Marathon Title</th>
                            <th className="border p-2">Start Date</th>
                            <th className="border p-2">Registration Dates</th>
                            <th className="border p-2">Total Registrations</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marathons.length > 0 ? (
                            marathons.map((marathon) => (
                                <tr key={marathon._id}>
                                    <td className="border p-2">{marathon.marathonTitle}</td>
                                    <td className="border p-2">{new Date(marathon.marathonStartDate).toLocaleDateString()}</td>
                                    <td className="border p-2">
                                        {new Date(marathon.registrationStartDate).toLocaleDateString()} -{" "}
                                        {new Date(marathon.registrationEndDate).toLocaleDateString()}
                                    </td>
                                    <td className="border p-2">{marathon.totalRegistrationCount}</td>
                                    <td className="border p-2">
                                        <button
                                            className="bg-blue-500 mb-2 text-white px-4 py-1 rounded hover:bg-blue-600"
                                            onClick={() => handleUpdate(marathon)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-1 ml-2 rounded hover:bg-red-600"
                                            onClick={() => deleteData(marathon?._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-4">
                                    No marathons found for this user.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl font-semibold mb-4">Update Marathon</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const updatedMarathon = {
                                    ...selectedMarathon,
                                    marathonTitle: e.target.marathonTitle.value,
                                    marathonStartDate: e.target.marathonStartDate.value,
                                };
                                handleModalSubmit(updatedMarathon);
                            }}
                        >
                            <input
                                type="text"
                                name="marathonTitle"
                                defaultValue={selectedMarathon?.marathonTitle}
                                className="w-full border p-2 mb-4"
                                required
                            />
                            <input
                                type="date"
                                name="marathonStartDate"
                                defaultValue={new Date(selectedMarathon?.marathonStartDate).toISOString().substr(0, 10)}
                                className="w-full border p-2 mb-4"
                                required
                            />
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-300 px-4 py-1 mr-2 rounded"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
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

export default MarathonList;
