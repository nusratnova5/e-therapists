import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/Firebase.config';
import axios from 'axios';

const Register = () => {
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
                text: createUserError,
                icon: "error"
            });
        }
        if (updateProfileError) {
            Swal.fire({
                text: updateProfileError,
                icon: "error"
            });
        }
        if (!createUserError && !updateProfileError) {
            try {
                const userData = { displayName, photoURL, email  };
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, userData);
                console.log('User created successfully:', response.data);
            } catch (error) {
                console.error('Error creating user:', error.response ? error.response.data : error.message);
            }
        }
    }
    useEffect(() => {
        if (user) {
            console.log(user)
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-accent text-center">Welcome <br /> to <br />TechHub</h1>
                </div>
                <div className="divider lg:divider-horizontal"></div>

                <div className="card shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-accent hover:bg-slate-600 text-white rounded-none uppercase tracking-widest">Register</button>
                        </div>
                        <div className=' mb-3'>
                            <p>Already have an account? <Link to={'/login'} className='text-accent font-bold'>Click here </Link>to login.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;