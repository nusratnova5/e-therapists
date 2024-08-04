import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SmallDevice = ({ handleSignUp }) => {
    const canvasRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (canvasRef.current && !canvasRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className='relative h-screen w-screen bg-cover bg-center' style={{ backgroundImage: "url('/images/auth-2.jpeg')" }}>
            {/* Centered toggle button */}
            <h1 className='text-blue text-4xl font-bold text-center p-12 pb-0'>E-Therapist</h1>

            <div className={`${isOpen ? 'flex flex-col items-center mt-4' : 'hidden'}`}>
                <p className='text-white text-lg font-medium'>Create Account</p>
                <p className='text-white text-lg'>Fill in Your Information</p>
            </div>


            <div className={`${isOpen ? 'hidden' : 'block mt-10'}`}>
                <p className='text-2xl font-bold text-center text-midnight-black mb-5'>SIGN IN TO YOUR ACCOUNT</p>
                <p className='text-medium-gray text-start m-7'>
                    Welcome Back! By clicking the sign up button, you agree to Zenitood Terms and Service and acknowledge the <span className='text-sky-blue underline'>Privacy and Policy</span>
                </p>
                <div className="flex items-center justify-center">
                    <button className="btn bg-charcoal-gray text-dark-blue flex flex-col px-10 py-16 flex-nowrap text-2xl" onClick={toggleDrawer}>
                        Create Account
                        <p className='text-white'>Fill in Your Information</p>
                    </button>
                </div>
            </div>

            {/* Bottom drawer */}
            <div ref={canvasRef} className={`bg-white rounded-t-3xl h-[calc(100vh-180px)] overflow-y-auto fixed bottom-0 left-0 w-full transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} duration-500 ease-in-out`}>
                <div className="p-4 shadow-lg border-t border-gray-200">
                    <p className='text-3xl font-semibold text-midnight-black mb-3 text-center'>Sign Up</p>
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="@username" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-blue hover:bg-slate-600 text-white uppercase tracking-widest">Sign up</button>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        <p className='text-center'>Already have an account? <Link to={'/login'} className='text-dark-blue underline'>Log in </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallDevice;