import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.config';
import googleimg from '../Login/images/google.png'
import facebookimg from '../Login/images/facebook.png'
import AuthSlider from '../Register/AuthSlider';
import LargeDevice from './LargeDevice';
import SmallDevicec from './SmallDevicec';

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
        <div>
            <div className='hidden lg:block'><LargeDevice handleGoogleLogin={handleGoogleLogin} googleimg={googleimg} facebookimg={facebookimg} handleSignIn={handleSignIn} /></div>
            <div className='block lg:hidden'><SmallDevicec handleGoogleLogin={handleGoogleLogin} googleimg={googleimg} facebookimg={facebookimg} handleSignIn={handleSignIn} /></div>
        </div>
    );
};

export default Login;