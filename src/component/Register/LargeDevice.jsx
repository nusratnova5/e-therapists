import React from 'react';
import { Link } from 'react-router-dom';
import AuthSlider from './AuthSlider';

const LargeDevice = ({handleSignUp}) => {
    return (
        <div className="h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 h-full">
                <div className="w-full p-20 col-span-3">
                    <h1 className='text-blue text-4xl mb-8'>E-Therapist</h1>
                    <p className='text-3xl font-semibold text-midnight-black mb-3'>Sign Up TO Your Account</p>
                    <p className='text-dark-gray text-start mb-5'>
                        Welcome Back! By clicking the sign up button, you agree to Zenitood Terms and Service and acknowledge the <span className='text-sky-blue underline'>Privacy and Policy</span>
                    </p>
                    <form onSubmit={handleSignUp} className="">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black text-dark-black font-medium">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="@username" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-2 text-sm">
                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                <span className="text-sky-blue">Accept Terms of Service</span>
                            </label>
                        </div>
                        <div className="form-control mb-3 mt-6 items-center">
                            <button className="btn bg-sky-blue hover:bg-slate-600 text-white px-28">Sign up</button>
                        </div>
                        <div className='mb-3'>
                            <p className='text-center'>Already have an account? <Link to={'/login'} className='text-dark-blue underline'>Log in </Link></p>
                        </div>
                    </form>
                </div>
                {/* <div className="text-center lg:text-left">
                    <img src={img} className='lg:h-[500px] w-full object-cover'></img>
                </div> */}
                <AuthSlider text={`<p class="w-full">Create Account</p>
                    <p class='text-white'>Fill in Your Information</p>`}></AuthSlider>
            </div>
        </div>
    );
};

export default LargeDevice;