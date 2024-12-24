import React from 'react';

const About = () => {
    return (
        <div>

            <div className=" py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Bridging Marathon Enthusiasm with Technology for a Seamless Experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <strong>ApplyList</strong> was born out of a desire to streamline the marathon application process
                                for enthusiasts and organizers alike. We understand the challenges of managing multiple applications
                                and staying on top of deadlines. That’s why we created a platform that’s intuitive, efficient, and
                                designed with your needs in mind.
                            </p>
                            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Choose Us</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-3">
                                <li>Effortless marathon application tracking in one place.</li>
                                <li>Seamless updates to ensure you're always informed.</li>
                                <li>Committed to user-friendly design and robust performance.</li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="https://fellow.app/wp-content/uploads/2022/01/team-collaboration.jpg"
                                alt="Team Collaboration"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Our Commitment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="text-center">
                                <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4">
                                    <i className="fas fa-users text-blue-600 text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700">Building Community</h3>
                                <p className="text-gray-600 mt-2">
                                    Fostering a supportive space for marathoners worldwide.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4">
                                    <i className="fas fa-bolt text-green-600 text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700">Driving Innovation</h3>
                                <p className="text-gray-600 mt-2">
                                    Continually enhancing our platform to meet your needs.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 p-6 rounded-full w-20 h-20 mx-auto mb-4">
                                    <i className="fas fa-heart text-red-600 text-3xl"></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700">Passionate Service</h3>
                                <p className="text-gray-600 mt-2">
                                    Dedicated to providing exceptional support at every step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gray-50 py-16">
                <div className="container mx-auto flex  flex-col md:flex-row items-center gap-12 md:gap-20 px-6 lg:px-20">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                            Nice to meet you
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We’re <strong>Alex</strong> and <strong>Taylor</strong>, the co-founders of <strong>Marathon Management</strong>.
                            Our journey began with a shared passion for marathons and a desire to simplify the way organizers and participants connect.
                            As a developer and an event coordinator, we envisioned a platform that streamlines marathon management while empowering communities worldwide.
                            What started as an idea turned into a mission to make marathon planning effortless and participation more accessible. <em>The rest is history</em>.

                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://therecursive.com/wp-content/uploads/2022/02/founders.jpg" // Replace with your image path
                            alt="Nice to Meet You"
                            className="rounded-lg shadow-lg max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto my-16 px-6">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Empowering Marathon Enthusiasts with Seamless Application Management.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <img
                            src="https://i.ytimg.com/vi/kVbbwgfwcz8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCO0kixEYNujK4v-v9G5et9P1b0Vw"
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At <strong>ApplyList</strong>, we specialize in simplifying the marathon application process.
                            Our platform is designed to empower users by providing intuitive tools to manage and track their
                            applications with ease. Whether you're a first-time runner or a seasoned participant, we strive to
                            make your journey stress-free and enjoyable.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We aim to revolutionize the way marathon enthusiasts interact with the application process by
                            offering a transparent, reliable, and user-friendly platform. Our commitment is to excellence,
                            innovation, and building a supportive community for all our users.
                        </p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default About;