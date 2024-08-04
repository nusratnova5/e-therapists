import React from 'react';
import { Link } from 'react-router-dom';
import AuthSlider from '../Register/AuthSlider';

const LargeDevice = ({handleGoogleLogin, googleimg, facebookimg, handleSignIn, error}) => {
    return (
        <div className="h-screen">
            <div className=" grid grid-cols-1 lg:grid-cols-7 gap-10 h-full">
                <div className="p-20 w-full col-span-3">
                    <h1 className='text-blue text-4xl mb-8'>E-Therapist</h1>
                    <p className='text-3xl font-semibold text-midnight-black mb-3'>Log In To Your Account</p>
                    <p className='text-dark-gray mb-8'>Welcome Back! Select a method to log in:</p>
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
                    <div className="divider text-dark-gray">Or continue with Email</div>
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
                <AuthSlider text={`Sign In
                    <span class='text-white'>to view all the massage therapists</span>`} />
            </div>
        </div>
    );
};

export default LargeDevice;