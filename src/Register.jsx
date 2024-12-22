import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { auth } from './firebase.init';

import { FaGoogle } from 'react-icons/fa';

const Register = () => {

    const navigate = useNavigate()
    const {createUser,  googleSignIn} = useContext(AuthContext)

      const  handleRegister  = (e)=> {
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
                icon: 'error',
                title: 'Invalid Password',
                html: `<ul>${validationErrors.map((err) => `<li>${err}</li>`).join('')}</ul>`,
            });
            return;  
        }

 
        createUser(email,password)
        .then(result => {
            
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateProfile(auth.currentUser, profile)
        .then((result) => {
        })
        .catch((error) => {   
        })
           
        const newUser = {email, name}
        fetch(` https://funding-application-server.vercel.app/users`, {
           method: 'POST',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(newUser)
        })
        .then((result)=> {

        })
        .catch((error) => {

        })

        form.reset();
        Swal.fire({
            title: "Register Successfully!",
            text: "Wait a moment !",
            icon: "success"
          });

          setTimeout(() => {
          navigate('/')   
         }, 2000); 
         
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Register Failed',
                text: error.message ,
            });
        })
         
      }

      const handleGoogleLogin = () => {
        googleSignIn()
        .then((result) => {
            navigate('/')
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Register Failed',
                text: error.message ,
            });
        })
      }

    return (
        <div>

            <div
                className="hero min-h-screen px-3"
                >
                <div className="hero-overlay bg-opacity-35"></div>

                <div
                    className="card w-full  max-w-lg shrink-0 shadow-2xl p-1 "
                    style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(240, 240, 240, 0.6))",
                        backdropFilter: "blur(12px)",
                        borderRadius: "15px",
                        border: "1px solid rgba(255, 255, 255, 0.3)",  
                    }}
                >
                    <form 
                    onSubmit={handleRegister}
                    className="card-body">
                        <p className='text-3xl font-bold text-center text-black'>Register now</p>

                    <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-medium">Full Name</span>
                            </label>
                            <input
                                type="Full Name"
                                placeholder="Name"
                                className="input input-bordered"
                                required 
                                name='name'
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-medium">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                name='photo' 
                            />
                        </div>   
                            
                            

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required 
                                name='email'
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base text-black font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required 
                                name='password'
                            />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r  from-gray-600 to-teal-500 text-white font-bold text-base">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className='mx-auto'>
                        
                        <button onClick={handleGoogleLogin} className='btn bg-black text-white '> <FaGoogle></FaGoogle> Login with GOOGLE</button>
                    </div>

                    <p className='text-center pb-8 pt-5 text-black font-medium'> Already have an account? <Link className='underline' to="/login"> Login Now </Link> </p>
                </div>

            </div>


        </div>
    );
};

export default Register;