import React, { useContext, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user} = useContext(AuthContext)
    const [isYearly, setIsYearly] = useState(false);

    const togglePlan = () => {
        setIsYearly(!isYearly);
    };

   

    return (
        <div>



            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            backgroundImage: "url(https://cdn.fleetfeet.com/a:2.4-f:cover-w:1440/assets/Chicago_marathon-start_240510_100603.jpeg?s=2dbee361)",
                        }}>
                        <div className="hero-overlay bg-opacity"></div>
                        <div className=''>  
                        <div className="card bg-[#0000007e] hero-content text-neutral-content text-center py-8 px-10 mx-5 md:mx-0  hit cardd">
                           
                           
                            <div className="max-w-md">

                                <h1 className="mb-5 text-5xl font-bold">
                                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Join the Marathon Today']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>

                                <p className="mb-5"> Sign up now and be part of an unforgettable experience! Participate in a community-driven event that promotes health, fitness, and a spirit of camaraderie. Challenge yourself and make memories that last a lifetime. </p>

                                {
                                    user ? 
                                    
                                        <Link to=""> <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                                            See Campaign </button> </Link> 
                                        : <Link to="/register"><button className="btn bg-gradient-to-r from-teal-500 to-gray-700 text-white font-bold text-base">
                                            Sign Up Now
                                        </button> </Link>
                                }

                            </div>

                        </div>
                        </div>

                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            backgroundImage: "url(https://hips.hearstapps.com/hmg-prod/images/race-day-1656663170.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity"></div>
                        <div className="card bg-[#0000007e] hero-content text-neutral-content text-center py-8 px-10 mx-5 md:mx-0 fit cart">
                            <div className="max-w-md">

                                <h1 className="mb-5 text-5xl font-bold">
                                    <span style={{ color: ' ', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Support Fellow Runners']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>

                                <p className="mb-5">
                                    Be a part of a supportive community. Cheer on runners, provide essential aid, or volunteer for various roles during the event. Together, we ensure everyone has an incredible marathon experience.
                                </p>

                                {
                                    user ? 
                                    
                                        <Link to=""> <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                                            See Campaign </button> </Link> 
                                        : <Link to="/register"><button className="btn bg-gradient-to-r from-teal-500 to-gray-700 text-white font-bold text-base">
                                            Sign Up Now
                                        </button> </Link>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            backgroundImage: "url(https://images.ctfassets.net/rxqefefl3t5b/6dbXz640rx6vIpNvF8I7p8/ff31b647ee9c5d938b3bb71ff15cdbfa/85210416_10157583299184748_8441948264000913408_o.jpg?fl=progressive&q=80)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="card bg-[#0000007e] hero-content text-neutral-content text-center mx-5 md:mx-0 py-8 px-10 hit cardd">
                            <div className="max-w-md">

                                <h1 className="mb-5 text-5xl font-bold">
                                    <span style={{ color: ' ', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Marathon Training Programs']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>


                                <p className="mb-5"> Get ready to run your best race yet! Access exclusive training guides, workout plans, and nutritional advice designed by experts to help you excel in the marathon.</p>

                                {
                                    user ? 
                                    
                                        <Link to=""> <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                                            See Campaign </button> </Link> 
                                        : <Link to="/register"><button className="btn bg-gradient-to-r from-teal-500 to-gray-700 text-white font-bold text-base">
                                            Sign Up Now
                                        </button> </Link>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <div
                        className="hero min-h-[80vh]"
                        style={{
                            backgroundImage: "url(https://marathontours.com/wp-content/uploads/sites/2/2024/07/ANA09629-scaled.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity"></div>
                        <div className="card bg-[#0000007e] hero-content text-neutral-content text-center mx-5 md:mx-0 py-8 px-10 fit cart">
                            <div className="max-w-md">

                                <h1 className="mb-5 text-5xl font-bold">
                                    <span style={{ color: '', fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Celebrating Achievements']}
                                            loop={Infinity}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>

                                <p className="mb-5"> A marathon is more than just a race; it's a journey. Celebrate milestones, honor participants, and share the joy of accomplishments. Let’s make every step count!</p>

                                {
                                    user ? 
                                    
                                        <Link to=""> <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                                            See Campaign </button> </Link> 
                                        : <Link to="/register"><button className="btn bg-gradient-to-r from-teal-500 to-gray-700 text-white font-bold text-base">
                                            Sign Up Now
                                        </button> </Link>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>




            <section>
                <div className="py-16 ">
                    <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://media.istockphoto.com/id/1300123069/photo/runners-running-towards-the-finish-line.jpg?s=612x612&w=0&k=20&c=XNlsYwQWlHHIlNYaxLuJU-YrD46ZTdPh9WWQpOt6Z60="
                                alt="Running group 1"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                            <img
                                src="https://t4.ftcdn.net/jpg/07/99/70/25/360_F_799702562_A7t9cKYyK0l1E1ymOM9nAYacx5OOI4gB.jpg"
                                alt="Running group 2"
                                className="rounded-lg shadow-lg w-full h-full object-cover"
                            />
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/036/114/878/small_2x/ai-generated-multiethnic-group-of-people-running-in-the-city-on-a-sunny-day-ai-generated-free-photo.jpg"
                                alt="Running group 3"
                                className="rounded-lg shadow-lg w-full h-full object-cover col-span-2"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-sm text-green-600 font-semibold uppercase mb-2">
                                About Our Program
                            </p>
                            <h2 className="text-4xl font-bold  mb-4">
                                WHERE EVERY STEP TAKES YOU{' '}
                                <span className="text-green-600 bg-green-100 px-1 mt-2">CLOSER TO GLORY</span>.
                            </h2>
                            <p className=" mb-8">
                                Join us in a journey to build endurance, confidence, and community.
                                Designed for runners of all levels, our program provides the perfect
                                blend of challenge and support.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-4">
                                    <div className="text-green-600 text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-10 h-10"
                                        >
                                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-4 8H6l4-4 4 4h-2v4h-4v-4z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-green-600">Our Vision</h3>
                                        <p className="text-gray-600">
                                            To inspire and connect runners of all levels, creating a strong,
                                            supportive community.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="text-green-600 text-4xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-10 h-10"
                                        >
                                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm1 3h-2v6h2V7zm-2 8h2v2h-2v-2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-green-600">Our Mission</h3>
                                        <p className="text-gray-600">
                                            To promote healthy lifestyles through running, fostering growth,
                                            and well-being.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="py-16 ">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <p className="text-green-600 font-semibold text-lg">Simple Pricing</p>
                        <h2 className="text-4xl font-bold  ">
                            Choose Your Perfect Plan
                        </h2>
                        <p className="  mt-4">
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
                                <div className=" bg-gray-800  rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl  font-bold text-green-600 mb-2">Starter</h3>
                                    <p className="text-white mb-6">A beautiful, simple website</p>
                                    <h4 className="text-4xl font-bold text-white  mb-6">$12</h4>
                                    <ul className=" text-white space-y-3">
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

                                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-green-600  mb-2">Pro</h3>
                                    <p className="text-white  mb-6">Perfect for Expert</p>
                                    <h4 className="text-4xl text-white font-bold  mb-6">$18</h4>
                                    <ul className="text-white space-y-3">
                                        <li>✔️ 20 Workouts</li>
                                        <li>✔️ Exercise plans in Mobile</li>
                                        <li>✔️ One-on-one coaching</li>
                                        <li>✔️ -50% Group coaching</li>
                                        <li>✔️ Weekly check-ins</li>
                                        <li>✔️ 24/7 Customer Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-600">
                                        Get Started
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Starter</h3>
                                    <p className="text-white mb-6">A beautiful, simple website</p>
                                    <h4 className="text-4xl font-bold text-white mb-6">$120</h4>
                                    <ul className="text-white space-y-3">
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

                                <div className=" bg-gray-800 rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-bold text-green-600 mb-2">Pro</h3>
                                    <p className=" text-white mb-6">Perfect for Expert</p>
                                    <h4 className="text-4xl font-bold text-white mb-6">$180</h4>
                                    <ul className="text-white space-y-3">
                                        <li>✔️ 40 Workouts</li>
                                        <li>✔️ Premium Exercise plans</li>
                                        <li>✔️ Personal coaching</li>
                                        <li>✔️ Weekly check-ins</li>
                                        <li>✔️ 24/7 Priority Support</li>
                                    </ul>
                                    <button className="mt-6 w-full py-2 bg-green-600   text-white rounded-md hover:bg-green-600">
                                        Get Started
                                    </button>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="text-center mt-12  ">
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
