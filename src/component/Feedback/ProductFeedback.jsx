import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/Firebase.config';

const ProductFeedback = ({ productId }) => {
    console.log(productId);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [rating, setRating] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]);
    const [user] = useAuthState(auth);

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const handleRating = (value) => {
        setRating(value);
    };
    const onSubmit = async (data) => {
        data.rating = rating;//key=value
        data.productId = productId;
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/product-feedback`, data);
        console.log(response);
        if (response.data.acknowledged) {
            Swal.fire({
                text: "Feedback added successfully.",
                icon: "success"
            });
        }
    }

    useEffect(() => {
        fetchFeedback()
    }, [productId])

    const fetchFeedback = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product-feedback?queryProductId=${productId}`)
        setFeedbacks(response?.data);
        console.log(response);
    }

    return (
        <div>
            <div className='bg-gray p-3 mb-5'>
                <div className='flex gap-3 '>
                    <img src={user.photoURL} alt="User Avatar" className="rounded-full h-[56px] w-[56px]" />
                    <div className='flex flex-col justify-center'>
                        {feedbacks?.map((feedback) => (
                            <div className='flex flex-col justify-center'>
                                <p>{feedback?.name}</p>
                                <p>{feedback?.feedback}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='border border-gray-100'>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-4xl font-bold">Share Your Feedback Here</span>
                        </label>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div className="flex gap-3 my-4">
                            <p className='flex-grow-0'>Rate the Product*</p>
                            <div className=''>
                                {Array(fullStars).fill(0).map((_, i) => (
                                    <button key={`full-${i}`} onClick={() => handleRating(i + 1)}>
                                        <FaStar className="text-yellow-500" />
                                    </button>
                                ))}
                                {hasHalfStar && (
                                    <button onClick={() => handleRating(fullStars + 0.5)}>
                                        <FaStarHalfAlt className="text-yellow-500" />
                                    </button>
                                )}
                                {Array(emptyStars).fill(0).map((_, i) => (
                                    <button key={`empty-${i}`} onClick={() => handleRating(fullStars + (hasHalfStar ? 1 : 0) + i + 1)}>
                                        <FaRegStar className="text-yellow-500" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className='mb-1'>Feedback</p>
                        <textarea className="textarea textarea-bordered rounded-none" {...register("feedback")} placeholder="Type your feedback here"></textarea>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" {...register("name")} className="input input-bordered rounded-none" required />
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <button className="btn bg-accent inline-block uppercase tracking-widest rounded-none text-white px-8 ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFeedback;