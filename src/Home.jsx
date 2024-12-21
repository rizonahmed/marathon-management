import React, { useState } from 'react';

const Home = () => {
    const [isYearly, setIsYearly] = useState(false);

    const togglePlan = () => {
        setIsYearly(!isYearly);
    };

    return (
        <div>






            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <p className="text-green-600 font-semibold text-lg">Simple Pricing</p>
                        <h2 className="text-4xl font-bold text-gray-800">
                            Choose Your Perfect Plan
                        </h2>
                        <p className="text-gray-500 mt-4">
                            Craftwork's plans are paid monthly or yearly. We make it simple to start —
                            and stop — your service at any time.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-gray-200 rounded-full p-1">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`py-2 px-6 rounded-full focus:outline-none ${!isYearly
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:text-green-600'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`py-2 px-6 rounded-full focus:outline-none ${isYearly
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:text-green-600'
                                    }`}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {!isYearly ? (
                            <>
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Starter</h3>
                                    <p className="text-gray-500 mb-6">A beautiful, simple website</p>
                                    <h4 className="text-4xl font-bold text-gray-800 mb-6">$12</h4>
                                    <ul className="text-gray-600 space-y-3">
                                        <li>✔️ 20 Workouts</li>
                                        <li>✔️ Exercise plans in Mobile</li>
                                        <li>✔️ One-on-one coaching</li>
                                        <li>✔️ -50% Group coaching</li>
                                        <li>✔️ 24/7 Customer Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                        Get Started
                                    </button>
                                </div>

                                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pro</h3>
                                    <p className="text-gray-500 mb-6">Perfect for Expert</p>
                                    <h4 className="text-4xl font-bold text-gray-800 mb-6">$18</h4>
                                    <ul className="text-gray-600 space-y-3">
                                        <li>✔️ 20 Workouts</li>
                                        <li>✔️ Exercise plans in Mobile</li>
                                        <li>✔️ One-on-one coaching</li>
                                        <li>✔️ -50% Group coaching</li>
                                        <li>✔️ Weekly check-ins</li>
                                        <li>✔️ 24/7 Customer Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
                                        Get Started
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Starter</h3>
                                    <p className="text-gray-500 mb-6">A beautiful, simple website</p>
                                    <h4 className="text-4xl font-bold text-gray-800 mb-6">$120</h4>
                                    <ul className="text-gray-600 space-y-3">
                                        <li>✔️ 30 Workouts</li>
                                        <li>✔️ Exclusive Exercise plans</li>
                                        <li>✔️ One-on-one coaching</li>
                                        <li>✔️ Group coaching sessions</li>
                                        <li>✔️ 24/7 Customer Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                        Get Started
                                    </button>
                                </div>

                                <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pro</h3>
                                    <p className="text-gray-500 mb-6">Perfect for Expert</p>
                                    <h4 className="text-4xl font-bold text-gray-800 mb-6">$180</h4>
                                    <ul className="text-gray-600 space-y-3">
                                        <li>✔️ 40 Workouts</li>
                                        <li>✔️ Premium Exercise plans</li>
                                        <li>✔️ Personal coaching</li>
                                        <li>✔️ Weekly check-ins</li>
                                        <li>✔️ 24/7 Priority Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
                                        Get Started
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="text-center mt-12 text-gray-600">
                        <p>
                            Have questions about plans? <a href="mailto:rizonahmed0486@gmail.com" target='blank' className="text-green-600 underline">Let’s talk</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
