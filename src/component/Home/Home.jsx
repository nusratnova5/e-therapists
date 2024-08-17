import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Home = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName, photoURL });
        if (createUserError) {
            Swal.fire({
                text: createUserError.message,
                icon: "error"
            });
        }
        if (updateProfileError) {
            Swal.fire({
                text: updateProfileError.message,
                icon: "error"
            });
        }
        if (!createUserError && !updateProfileError) {
            try {
                const userData = { displayName, photoURL, email };
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, userData);
                console.log('User created successfully:', response.data);
            } catch (error) {
                console.error('Error creating user:', error.response ? error.response.data : error.message);
            }
        }
    };

    useEffect(() => {
        if (user) {
            console.log(user)
            navigate('/login');
        }
    }, [user, navigate]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative h-screen w-screen bg-cover bg-center' style={{ backgroundImage: "url('/images/auth-2.jpeg')" }}>
            {/* Centered toggle button */}
            <h1 className='text-blue text-4xl font-bold text-center p-12'>E-Therapist</h1>
            <p className='text-2xl font-bold text-center text-midnight-black mb-5'>SIGN IN TO YOUR ACCOUNT</p>
            <p className='text-medium-gray text-start m-7'>
                Welcome Back! By clicking the sign up button, you agree to Zenitood Terms and Service and acknowledge the <span className='text-sky-blue underline'>Privacy and Policy</span>
            </p>
            <div className="flex items-center justify-center pt-12">
                <button className="btn bg-charcoal-gray text-dark-blue flex flex-col px-10 py-16 flex-nowrap text-2xl" onClick={toggleDrawer}>
                    Create Account
                    <p className='text-white'>Fill in Your Information</p>
                </button>

            </div>

            {/* Bottom drawer */}
            <div className={`fixed bottom-0 left-0 w-full transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} duration-500 ease-in-out`}>
                <div className="bg-white p-4 shadow-lg border-t border-gray-200 rounded-t-3xl">
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
                        <div className="form-control mt-6">
                            <button className="btn bg-accent hover:bg-slate-600 text-white uppercase tracking-widest">Sign up</button>
                        </div>
                        <div className='mb-3'>
                            <p>Already have an account? <Link to={'/login'} className='text-accent font-bold'>Click here</Link> to login.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
