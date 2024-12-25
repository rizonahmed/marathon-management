import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "./firebase.init";

import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import registerAnimation from "./assets/register.json";
import { Helmet } from "react-helmet";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const validatePassword = (password) => {
            const errors = [];
            if (password.length < 6) {
                errors.push("Password must be at least 6 characters long.");
            }
            if (!/[A-Z]/.test(password)) {
                errors.push("Password must include at least one uppercase letter.");
            }
            if (!/[a-z]/.test(password)) {
                errors.push("Password must include at least one lowercase letter.");
            }
            return errors;
        };

        const validationErrors = validatePassword(password);
        if (validationErrors.length > 0) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                html: `<ul>${validationErrors
                    .map((err) => `<li>${err}</li>`)
                    .join("")}</ul>`,
            });
            return;
        }

        createUser(email, password)
            .then((result) => {
                const profile = {
                    displayName: name,
                    photoURL: photo,
                };
                updateProfile(auth.currentUser, profile)
                    .then(() => { })
                    .catch((error) => { });

                const newUser = { email, name };
                fetch(`https://funding-application-server.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(() => { })
                    .catch((error) => { });

                form.reset();
                Swal.fire({
                    title: "Register Successfully!",
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
                    title: "Register Failed",
                    text: error.message,
                });
            });
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Register Failed",
                    text: error.message,
                });
            });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-5 gap-10">

            <Helmet>
                <title>Register/Champion Marathons</title>
            </Helmet>

            <div
                className="card w-full max-w-md shadow-2xl bg-gray-200 p-1"
                style={{
                    backdropFilter: "blur(12px)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <form onSubmit={handleRegister} className="card-body">
                    <p className="text-3xl font-bold text-center text-black">
                        Register Now
                    </p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-black font-medium">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            required
                            name="name"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-black font-medium">
                                Photo URL
                            </span>
                        </label>
                        <input
                            type="url"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            name="photo"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-black font-medium">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
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
                            placeholder="Password"
                            className="input input-bordered"
                            required
                            name="password"
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-gray-600 to-teal-500 text-white font-bold text-base">
                            Register
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
                <p className="text-center pb-8 pt-5 text-black font-medium">
                    Already have an account?
                    <Link className="underline" to="/login">
                        Login Now
                    </Link>
                </p>
            </div>

            {/* Animation Section */}
            <div className="w-96 lg:w-1/2 lg:flex-shrink-0 xl:w-1/3">
                <Lottie animationData={registerAnimation} />
            </div>
        </div>
    );
};

export default Register;
