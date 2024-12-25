import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import LoginAnimation from "./assets/login.json";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                form.reset();
                Swal.fire({
                    title: "Login Success!",
                    text: "Wait a moment!",
                    icon: "success",
                });

                setTimeout(() => {
                    navigate("/");
                }, 2000);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message || "Something went wrong!",
                });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message || "Something went wrong!",
                });
            });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-5 gap-10">

            <Helmet>
                <title>Login/Champion Marathons</title>
            </Helmet>

            <div
                className="card w-full max-w-md shrink-0 shadow-2xl p-1 bg-gray-200"
                style={{
                    backdropFilter: "blur(12px)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <form onSubmit={handleLogin} className="card-body">
                    <p className="text-3xl font-bold text-center text-black">
                         <h1 className="mb-5 text-5xl font-bold ">
                                                                <span style={{ fontWeight: 'bold' }}>
                                                                    <Typewriter
                                                                        words={['Login Please']}
                                                                        loop={Infinity}
                                                                        cursor
                                                                        cursorStyle="_"
                                                                        typeSpeed={70}
                                                                        deleteSpeed={40}
                                                                        delaySpeed={1000}
                                                                    />
                                                                </span>
                                                            </h1>
                    </p>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-black font-medium">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                            name="email"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-black font-medium">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                            name="password"
                        />
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover text-black text-base font-medium"
                            >
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                            Login
                        </button>
                    </div>
                </form>

                <div className="mx-auto mb-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="btn bg-black text-white flex items-center gap-2"
                    >
                        <FaGoogle /> Login with GOOGLE
                    </button>
                </div>

                <p className="text-center pb-8 pt-5 font-medium text-black">
                    Don't have any account?{" "}
                    <Link className="underline" to="/register">
                        Register Now
                    </Link>
                </p>
            </div>

            {/* Animation */}
            <div className="w-96 lg:w-1/2 lg:flex-shrink-0 xl:w-1/3">
                <Lottie animationData={LoginAnimation} />
            </div>
        </div>
    );
};

export default Login;
