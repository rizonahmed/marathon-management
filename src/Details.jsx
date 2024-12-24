import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
  const marathon = useLoaderData();
  const [totalRegistrations, setTotalRegistrations] = useState(marathon.totalRegistrations || 0);
  const navigate = useNavigate();

  // Validate if the current date is within the registration period
  const currentDate = new Date();
  const isOngoing =
    currentDate >= new Date(marathon.registrationStartDate) &&
    currentDate <= new Date(marathon.registrationEndDate);
  const label = isOngoing ? 'Ongoing' : 'Upcoming';

  const handleRegister = () => {
    if (isOngoing) {
      // Navigate to the registration page
      navigate(`/register/${marathon._id}`, {
        state: {
          email: "user@example.com", // Replace with the logged-in user's email
          marathonTitle: marathon.marathonTitle,
          marathonStartDate: marathon.marathonStartDate,
        },
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 border rounded-lg shadow-lg">
      {/* Marathon Banner */}
      <div className="relative">
        <img
          src={marathon.marathonImageUrl}
          alt={marathon.marathonTitle}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div
          className={`absolute top-2 left-2 py-1 px-3 rounded-lg text-sm font-bold ${
            isOngoing ? 'bg-blue-500' : 'bg-green-500'
          } text-white`}
        >
          {label}
        </div>
      </div>

      {/* Marathon Details */}
      <div className="mt-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-green-600">
          {marathon.marathonTitle}
        </h1>
        <p className="text-center text-gray-700 text-lg">{marathon.description}</p>

        <div className=" grid  grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div>
            <p className="text-lg text-gray-600">
              <strong>Location:</strong> {marathon.location}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong>Distance:</strong> {marathon.runningDistance}
            </p>
          </div>
          <div className='md:text-end'>
            <p className="text-lg text-gray-600">
              <strong>Start Date:</strong>{' '}
              {new Date(marathon.marathonStartDate).toLocaleDateString()}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong>Registration:</strong>{' '}
              {new Date(marathon.registrationStartDate).toLocaleDateString()} -{' '}
              {new Date(marathon.registrationEndDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl text-green-600">
            <strong>Total Registrations:</strong> {totalRegistrations}
          </p>
        </div>

        {/* Registration Status */}
        <div className="mt-6 text-center">
          {isOngoing ? (
            <button
              onClick={handleRegister}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Register Now
            </button>
          ) : (
            <p className="text-red-500 font-semibold">Registration is not open yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
