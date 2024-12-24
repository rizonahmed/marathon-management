import React from 'react';

const Services = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
                    Our Services
                </h2>

                <div className="flex flex-col lg:flex-row items-center mb-16">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Marathon Management</h3>
                        <p className="text-gray-600 text-lg">
                            Simplify marathon planning and execution with our comprehensive management tools. 
                            From creating and customizing events to tracking registrations, we provide a seamless 
                            experience for event organizers. Let us handle the logistics so you can focus on building 
                            a memorable event.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://www.rentalsinjax.com/images/home-welcome.jpg"
                            alt="Marathon Management"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="flex gap-5 flex-col-reverse lg:flex-row items-center mb-16">
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://loghicconnect.com.au/wp-content/uploads/2017/07/shutterstock_1085354081-e1549484623497.jpg"
                            alt="Participant Engagement"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Participant Engagement</h3>
                        <p className="text-gray-600 text-lg">
                            Engage with marathon participants effortlessly. Our platform enables users to 
                            explore events, view detailed information, and apply for marathons with ease. 
                            Ensure your participants have a smooth and enjoyable experience, from registration 
                            to race day.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Data-Driven Insights</h3>
                        <p className="text-gray-600 text-lg">
                            Unlock valuable insights with real-time analytics and reporting. 
                            Track registrations, monitor event performance, and gather feedback to 
                            continuously improve your marathons. Our platform helps you make data-informed 
                            decisions to achieve your goals.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="https://www.vmsconsultants.com/wp-content/uploads/2023/12/Image-5.jpg"
                            alt="Data-Driven Insights"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Why Choose Our Platform
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:1024/1*PaMo78LmRWPhjT7NVuN3tg.jpeg"
                                    alt="Event Organization"
                                    className="mx-auto h-52"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Seamless Event Organization
                            </h3>
                            <p className="text-gray-600">
                                Organize marathons effortlessly with our user-friendly tools. From event creation 
                                to participant management, our platform simplifies every step of the process.
                            </p>
                        </div>

                        <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://si-interactive.s3.amazonaws.com/prod/plansponsor-com/wp-content/uploads/2022/11/18120413/PS-111822-Empower-annual-defined-contribution-survey-1131738327-web.jpg"
                                    alt="Empower Participants"
                                    className="mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Empower Participants
                            </h3>
                            <p className="text-gray-600">
                                Provide participants with the tools they need to explore, register, and 
                                engage with marathon events, ensuring an exceptional experience.
                            </p>
                        </div>

                        <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300">
                            <div className="mb-6">
                                <img
                                    src="https://mitsind.com/wp-content/uploads/2017/11/Advanced-Analytics-850x350.png"
                                    alt="Advanced Analytics"
                                    className="mx-auto h-52"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                Advanced Analytics
                            </h3>
                            <p className="text-gray-600">
                                Leverage data insights to track event performance, monitor participation trends, 
                                and make informed decisions to enhance your events.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" py-16">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
                        What Our Clients Say
                    </h2>

                    <div className="flex flex-col gap-8">
                        <div className="flex justify-start gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
                                        alt="User"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">
                                            "This Marathon Management System is top-notch! It saved us so much time and made the event management so much easier."
                                        </p>
                                        <p className="text-sm text-gray-500">John Doe, Event Organizer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <div className="bg-blue-100 p-6 rounded-lg shadow-lg max-w-xl w-full">
                                <div className="flex gap-4 items-center justify-end">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">
                                            "I was able to register and receive all the details effortlessly. The process was super smooth!"
                                        </p>
                                        <p className="text-sm text-gray-500">Jane Smith, Participant</p>
                                    </div>
                                    <img
                                        src="https://i.pinimg.com/736x/78/a2/b2/78a2b216dc8e4979009e8766cb6e77bd.jpg"
                                        alt="User"
                                        className="w-12 h-12 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-start gap-4">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src="https://truckeedonnerlodge.com/wp-content/uploads/2021/02/personnel-6.jpg"
                                        alt="User"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-800">
                                            "The dashboard is easy to navigate, and everything works as expected. Definitely recommend this service!"
                                        </p>
                                        <p className="text-sm text-gray-500">Michael Lee, Event Organizer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
