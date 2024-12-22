import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-10">
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
                            <a href="#" className="hover:text-green-500">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Contact
                            </a>
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
                            href="#"
                            className="text-gray-700 hover:text-green-800"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.87v-6.99h-2.54v-2.88h2.54V9.65c0-2.5 1.5-3.88 3.76-3.88 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.88h-2.35v6.99C18.34 21.13 22 17 22 12z" />
                            </svg>
                        </a>
                     
                        <a
                            href="#"
                            className="text-gray-700 hover:text-green-800"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M22.46 6c-.77.35-1.61.59-2.46.69a4.26 4.26 0 0 0 1.88-2.37 8.56 8.56 0 0 1-2.73 1.04 4.27 4.27 0 0 0-7.39 3.89 12.1 12.1 0 0 1-8.76-4.44 4.25 4.25 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.93-.54v.06c0 2.08 1.48 3.81 3.44 4.2-.36.1-.74.15-1.12.15-.28 0-.55-.03-.82-.08a4.28 4.28 0 0 0 3.99 2.96A8.58 8.58 0 0 1 2 19.54a12.07 12.07 0 0 0 6.56 1.92c7.88 0 12.2-6.54 12.2-12.21l-.01-.56A8.58 8.58 0 0 0 22.46 6z" />
                            </svg>
                        </a>
                     
                        <a
                            href="#"
                            className="text-gray-700 hover:text-green-800"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <circle cx="12" cy="12" r="3.2" />
                                <path d="M14.828 3H9.172A6.172 6.172 0 0 0 3 9.172v5.656A6.172 6.172 0 0 0 9.172 21h5.656A6.172 6.172 0 0 0 21 14.828V9.172A6.172 6.172 0 0 0 14.828 3zm2.372 12.828a3.172 3.172 0 0 1-3.172 3.172H9.172A3.172 3.172 0 0 1 6 14.828V9.172A3.172 3.172 0 0 1 9.172 6h5.656a3.172 3.172 0 0 1 3.172 3.172v5.656z" />
                                <circle cx="16.5" cy="7.5" r="1.5" />
                            </svg>
                        </a>
                   
                        <a
                            href="#"
                            className="text-gray-700 hover:text-green-800"
                            aria-label="GitHub"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.63-1.35-2.22-.26-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02A9.3 9.3 0 0 1 12 6.84c.85.004 1.71.11 2.5.32 1.91-1.3 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.83-2.35 4.68-4.59 4.93.36.31.69.93.69 1.87v2.77c0 .26.18.58.69.48A10.002 10.002 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                        </a>
                     
                        <a
                            href="#"
                            className="text-gray-700 hover:text-green-800"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-7-3.5h-2.69V9H15V8.7c0-1.15-.63-1.8-1.6-1.8H11.5v2h1.1v.45H11.5v1.1h1.1V15h2.1v-1.9h2V12h-2v-.55h1.9V9.5z" />
                            </svg>
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
