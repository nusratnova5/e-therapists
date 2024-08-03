import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import avatar from '/images/user.png'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { SlArrowDown } from 'react-icons/sl';
import { IoNotificationsOutline } from 'react-icons/io5';
import { HiMiniArrowRightEndOnRectangle } from 'react-icons/hi2';


const DashboardHeader = ({ toggleSidebar }) => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);


    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="navbar bg-white fixed px-2 lg:px-10 z-10 top-0 left-0 lg:left-80 w-auto right-0">
            <div className="flex-1 d-block lg:d-none">
                {/* <a className="btn btn-ghost text-xl text-red-900">Tech Hub</a> */}
                <div className="dropdown dropdown-end">
                    <div className='flex justify-center items-center gap-2'>
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <img src={avatar} alt="User Avatar" className="rounded-full w-12 h-12" />
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-bold'>Sagar Sani</p>
                                    <SlArrowDown className='text-xs' />
                                </div>
                                <p className='text-sm'>sagar@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label onClick={toggleSidebar} className="btn bg-transparent border-0 shadow-transparent drawer-button lg:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </label>

                </div>
                <div className='flex justify-center items-center gap-3'>
                    <IoNotificationsOutline className='border border-gray rounded-full text-3xl p-1' />
                    <div className="divider divider-horizontal m-0"></div>
                    <button className='flex items-center gap-2'>Logout<HiMiniArrowRightEndOnRectangle className='text-dark-red bg-light-red rounded-full p-2 text-4xl' />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default DashboardHeader;