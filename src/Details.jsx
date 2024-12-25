import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {
    const marathon = useLoaderData();
    const navigate = useNavigate();

    const calculateTimeLeft = () => {
        const startDate = new Date(marathon.marathonStartDate).getTime();
        const now = new Date().getTime();
        const difference = startDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleRegister = () => {
        navigate(`/register/${marathon._id}`, {
            state: {
                email: "user@example.com",
                marathonTitle: marathon.marathonTitle,
                marathonStartDate: marathon.marathonStartDate,
            },
        });
    };

    const isOngoing =
        new Date() >= new Date(marathon.registrationStartDate) &&
        new Date() <= new Date(marathon.registrationEndDate);

    const label = isOngoing ? 'Ongoing' : 'Upcoming';

    return (
        <div className="max-w-5xl mx-auto my-12 p-6 border rounded-lg shadow-lg">

            <Helmet>
                <title>Details/Champion Marathons</title>
            </Helmet>

            <div className="relative">
                <img
                    src={marathon.marathonImageUrl}
                    alt={marathon.marathonTitle}
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div
                    className={`absolute top-2 left-2 py-1 px-3 rounded-lg text-sm font-bold ${isOngoing ? 'bg-blue-500' : 'bg-green-500'
                        } text-white`}
                >
                    {label}
                </div>
            </div>

            <div className="mt-8">
                <h1 className="text-4xl font-extrabold text-center mb-4">
                    {marathon.marathonTitle}
                </h1>
                <p className="text-center text-gray-700 text-lg">{marathon.description}</p>

                <div className="flex justify-center gap-4 mt-8">
                    {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => {
                        const time = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
                        return (
                            <div
                                key={unit}
                                className="bg-gradient-to-br from-gray-100 to-gray-300 shadow-md rounded-full w-20 h-20 flex items-center justify-center flex-col"
                            >
                                <p className="text-2xl font-bold text-gray-800">{String(time).padStart(2, '0')}</p>
                                <p className="text-sm text-gray-500">{unit}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div>
                        <p className="text-lg text-gray-600">
                            <strong>Location:</strong> {marathon.location}
                        </p>
                        <p className="text-lg text-gray-600 mt-2">
                            <strong>Distance:</strong> {marathon.runningDistance}
                        </p>
                    </div>
                    <div className="md:text-end">

                        <p className="text-lg text-gray-600 mt-2">
                            <strong>Registration:</strong>{' '}
                            {new Date(marathon.registrationStartDate).toLocaleDateString()} -{' '}
                            {new Date(marathon.registrationEndDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xl text-green-600">
                        <strong>Total Registrations:</strong> {marathon?.totalRegistrationCount}
                    </p>
                </div>

                <div className="mt-6 text-center">
                    {isOngoing ? (
                        <Link to={`/applyPage/${marathon?._id}`}>
                            <button
                                onClick={handleRegister}
                                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-gray-600 text-white rounded-lg transition"
                            >
                                Register Now
                            </button>
                        </Link>
                    ) : (
                        <p className="text-red-500 font-semibold">
                            Registration is not open yet.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
