import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SmallDevice = ({ handleSignUp, createUserError, passwordError, loading }) => {
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
                            <input type="text" name="displayName" placeholder="@username" className="input input-bordered bg-transparent rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered bg-transparent" required />
                        </div>
                        {createUserError && <p className='text-red-500'>{createUserError.message}</p>}
                        {passwordError && <p className='text-red-500'>{passwordError}</p>}
                        {
                            loading ? <button type="button" class="flex mb-3 mt-6 mx-auto w-60 bg-indigo-500 disabled:bg-blue-600 btn disabled:text-white" disabled>
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </button> : <div className="form-control mt-6">
                                <button className="btn bg-sky-blue hover:bg-slate-600 text-white uppercase tracking-widest">Sign up</button>
                            </div>
                        }
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