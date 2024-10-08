import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/Firebase.config';
import axios from 'axios';
import img from '/images/auth-1.jpeg'
import AuthSlider from './AuthSlider';
import LargeDevice from './LargeDevice';
import SmallDevice from './SmallDevice';

const Register = () => {
    const [passwordError, setPasswordError] = useState(null);
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
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setPasswordError("Password and confirm password doesn't matched");
            return;
        } else {
            setPasswordError(null);
        }
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
                const userData = { displayName, photoURL, email };
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
        <div className='bg-white'>
            <div className='hidden lg:block'><LargeDevice loading={loading} passwordError={passwordError} createUserError={createUserError} handleSignUp={handleSignUp} /></div>
            <div className='block lg:hidden'><SmallDevice loading={loading} passwordError={passwordError} createUserError={createUserError} handleSignUp={handleSignUp} /></div>
        </div>
    );
};

export default Register;