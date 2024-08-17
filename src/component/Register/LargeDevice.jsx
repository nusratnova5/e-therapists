import React from 'react';
import { Link } from 'react-router-dom';
import AuthSlider from './AuthSlider';

const LargeDevice = ({handleSignUp, createUserError, passwordError, loading }) => {
    return (
        <div className="h-screen overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 h-full">
                <div className="w-full p-20 col-span-3 overflow-y-auto">
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
                            <input type="text" name="displayName" placeholder="@username" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-transparent" required />
                        </div>
                        <div className="form-control mb-2">
                            <label className="label">
                                <span className="label-text text-dark-black font-medium">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="password" className="input input-bordered bg-transparent" required />
                        </div>
                        {createUserError && <p className='text-red-500'>{createUserError.message}</p>}
                        {passwordError && <p className='text-red-500'>{passwordError}</p>}
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-2 text-sm">
                                <input type="checkbox" className="checkbox h-4 w-4 rounded" />
                                <span className="text-sky-blue">Accept Terms of Service</span>
                            </label>
                        </div>
                        {
                            loading ? <button type="button" class="flex mb-3 mt-6 mx-auto w-60 bg-indigo-500 disabled:bg-blue-600 btn disabled:text-white" disabled>
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </button> : <div className="form-control mt-6">
                                <button className="btn bg-sky-blue hover:bg-slate-600 w-60 mx-auto text-white uppercase tracking-widest">Sign up</button>
                            </div>
                        }
                        <div className='mb-3'>
                            <p className='text-center'>Already have an account? <Link to={'/login'} className='text-dark-blue underline'>Log in </Link></p>
                        </div>
                    </form>
                </div>
                <AuthSlider text={`<p class="w-full">Create Account</p>
                    <p class='text-white'>Fill in Your Information</p>`}></AuthSlider>
            </div>
        </div>
    );
};

export default LargeDevice;