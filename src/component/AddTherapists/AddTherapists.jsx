import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddTherapists = () => {
    const createProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const description = form.description.value;
        const address = form.address.value;
        // const imageUrl = form.imageUrl.value;

        const requestBody = {
            fullName: fullName,
            email: email,
            phone: phone,
            description: description,
            // imageUrl: imageUrl,
            address: address,
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Add"
        }).then(async (result)  =>  {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post('http://localhost:5000/therapists', requestBody);
                    console.log('Product created successfully:', response);
                    if (response.data.acknowledged) {
                        Swal.fire({
                            text: "Product added successfully.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    console.error('Error creating user:', error.response ? error.response.data : error.message);
                }
                   
            }
        });

    }

    return (
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-5">Personal Information</h2>
            <form onSubmit={createProfile} className="space-y-6 flex gap-3 mb-3">
                {/* Personal Information */}
                <fieldset className="border p-4 rounded-md w-full">
                    <legend className="text-lg font-medium text-gray-700">Personal Information</legend>
                    <div className="mt-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <input type="text" id="address" name="address" required  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Description/Bio</label>
                        <textarea id="bio" name="description" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                </fieldset>

                {/* Professional Details
                <fieldset className="border p-4 rounded-md w-full">
                    <legend className="text-lg font-medium text-gray-700">Professional Details</legend>

                    <div className="mt-4">
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                        <select id="specialization" name="specialization" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                            <option ="Therapy">Child Therapy</option>
                            <option value="couplesTherapy">Couples Therapy</option>
                            <option value="familyTherapy">Family Therapy</option>
                            <option value="cbt">Cognitive Behavioral Therapy</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
                        <input type="number" id="experience" name="experience" min="0" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">Qualifications</label>
                        <textarea id="qualifications" name="qualifications" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="languages" className="block text-sm font-medium text-gray-700">Languages Spoken</label>
                        <input type="text" id="languages" name="languages" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </fieldset> */}

                {/* Consultation Details */}
                {/* <fieldset className="border p-4 rounded-md w-full">
                    <legend className="text-lg font-medium text-gray-700">Consultation Details</legend>

                    <div className="mt-4">
                        <label htmlFor="fee" className="block text-sm font-medium text-gray-700">Consultation Fee</label>
                        <input type="number" id="fee" name="fee" min="0" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700">Consultation Type</label>
                        <select id="consultationType" name="consultationType" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                            <option value="inPerson">In-Person</option>
                            <option value="online">Online</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Description/Bio</label>
                        <textarea id="bio" name="bio" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                </fieldset> */}
                            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>

            </form>

        </div>
    );
};

export default AddTherapists;
