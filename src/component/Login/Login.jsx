import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';

const Login = () => {
    const [signInWithGoogle, googleuser, googleLoading] = useSignInWithGoogle(auth);

    const handleGoogleLogin = async () => {
        await signInWithGoogle();
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const res = await signInWithEmailAndPassword(email, password);
        console.log(res);
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";

    useEffect(() => {
        console.log("user", user);
        console.log("googleuser", googleuser);
        if (user || googleuser) {
            navigate(from, { replace: true });
        }
    }, [user, loading, navigate, from, googleuser, googleLoading]);


    return (
        <div className="bg-base-200">
            <div className=" flex flex-col lg:flex-row">
                <div className="card w-full">
                    <h1>LOGO</h1>
                    <h1>Sign In To Your Account</h1>
                    <p>elcome Back! By click the sign up button, you're agree
                        to
                        Zenitood Terms and Service and acknlowledge the
                        <span>Privacy and Policy</span></p>
                    <form onSubmit={handleSignIn} className="card-body pb-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="@username" defaultValue={''} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" defaultValue={'test@gmail.com'} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" defaultValue={'123456'} className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Re-type your password" defaultValue={'123456'} className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-accent  text-white font-bold rounded-none">Sign up</button>
                        </div>
                    </form>
                    <div className="form-control mx-7 mb-3 ">
                        <button onClick={handleGoogleLogin} className="btn bg-accent  text-white font-bold rounded-none">Google</button>
                    </div>
                    <div className='mx-7 mb-3'>
                        <p>Don't have any account? <Link to={'/register'} className='text-accent font-bold'>Click here </Link>to register.</p>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-accent text-center">Welcome <br /> to <br />TechHub</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;