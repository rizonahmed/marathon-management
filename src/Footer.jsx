import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="border-t py-10">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                    <div>

                    <img src="https://www.pngkey.com/png/full/918-9189472_11-marathon-logo.png" alt="Logo" className="w-20 h-16" />
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Champions</h2>

                        <p className="">
                            Empowering users with innovative solutions and reliable services. We aim to
                            provide the best experiences for everyone.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                             <Link to="/" className="hover:text-green-500"> Home</Link>
                        </li>
                        <li>
                             <Link to="/about" className="hover:text-green-500"> About Us</Link>
                        </li>
                        <li>
                             <Link to="/services" className="hover:text-green-500">Services</Link>
                        </li>
                      
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-4">Get in Touch</h3>
                    <ul className="space-y-2">
                        <li>Email: example@gmail.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: 1910 Tangail-Sadar, Tangil, Bangladesh</li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                
                        <a
                            href="https://www.facebook.com/profile.php?id=61552156421365" target='blank'
                            className=" hover:text-green-800"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-6 h-6"></FaFacebook>
                        </a>
                     
                        <a
                            href="https://x.com/RizonAhmed0486" target='blank'
                            className=" hover:text-green-800"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-6 h-6"></FaTwitter>
                        </a>
                     
                        <a
                            href="#"
                            className=" hover:text-green-800"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-6 h-6"></FaInstagram>
                        </a>
                   
                        <a
                            href="https://github.com/rizonahmed" target='blank'
                            className=" hover:text-green-800"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6"></FaGithub>
                        </a>
                     
                        <a
                            href="https://www.linkedin.com/in/rizon-ahmed/" target='blank'
                            className=" hover:text-green-800"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6"></FaLinkedin>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 ">
                <p>© 2024 YourWebsite. All rights reserved.</p>
                <p>Developed By -  Rizon Ahmed'S</p>
            </div>
        </footer>
    );
};

export default Footer;
