import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const SmallDevicec = ({ handleGoogleLogin, googleimg, facebookimg, handleSignIn, error }) => {
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
                <p className='text-white text-lg px-16 text-center'><span className='font-medium'>Sign In</span> to view all the massage therapists</p>
            </div>

            <div className={`${isOpen ? 'hidden' : 'block mt-10'}`}>
                <p className='text-2xl font-bold text-center text-midnight-black mb-5'>SIGN IN TO YOUR ACCOUNT</p>
                <p className='text-medium-gray text-start m-7'>
                    Welcome Back! By clicking the sign up button, you agree to Zenitood Terms and Service and acknowledge the <span className='text-sky-blue underline'>Privacy and Policy</span>
                </p>
                <div className="flex items-center justify-center">
                    <button className="btn bg-charcoal-gray text-dark-blue flex flex-col px-10 py-16 flex-nowrap text-2xl" onClick={toggleDrawer}>
                        Log In
                        <p className='text-white'>Fill in Your Information</p>
                    </button>

                </div>
            </div>


            {/* Bottom drawer */}
            <div ref={canvasRef} className={`bg-white rounded-t-3xl h-[calc(100vh-180px)] overflow-y-auto fixed bottom-0 left-0 w-full transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} duration-500 ease-in-out`}>
                <div className="p-4 shadow-lg border-t border-gray-200">
                    <p className='text-2xl font-semibold text-midnight-black mb-3 text-center'>Log In To Your Account</p>
                    <p className='text-dark-gray mb-8 text-center'>Welcome Back! Select a method to log in:</p>
                    <div className='flex gap-10 mb-10'>
                        <button className='flex-1 px-8 py-3 bg-gradient-to-r from-[#E4E4E4] to-white flex justify-center items-center gap-1 rounded-md drop-shadow-lg' onClick={handleGoogleLogin}>
                            <img src={googleimg} alt="" className='h-5 w-5' />
                            Google
                        </button>
                        <button className='flex-1 rounded-lg px-10 py-2 bg-gradient-to-r from-[#298FFF] to-[#0778F5] flex gap-1 text-white justify-center items-center'>
                            <img src={facebookimg} alt="" />
                            Facebook
                        </button>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body p-0">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={'test@gmail.com'} placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Password</span>
                            </label>
                            <input type="password" name='password' defaultValue={'123456'} placeholder="password" className="input input-bordered" required />
                        </div>
                        {error && <p className='text-red-500'>{error.message}</p>}
                        <div className="form-control flex flex-row items-center justify-between">
                            <label className="label cursor-pointer justify-start gap-2 text-sm">
                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                <span className="">Remember me</span>
                            </label>
                            <p className='text-end text-dark-blue text-sm font-medium underline'>Forget password</p>
                        </div>
                        <div className="form-control mb-3 mt-6 items-center">
                            <button className="btn bg-sky-blue hover:bg-slate-600 text-white px-28">Sign in</button>
                        </div>
                    </form>
                    <div className='mb-3'>
                        <p className='text-center'>Don't have an account? <Link to={'/register'} className='text-dark-blue underline'>Create now </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallDevicec;