import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/Firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const DashboardHeader = ({ toggleSidebar }) => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);


    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="navbar fixed px-2 lg:px-10 z-10">
            <div className="flex-1 d-block lg:d-none">
                <a className="btn btn-ghost text-xl text-red-900">Tech Hub</a>
            </div>
            <div className="flex-none gap-2">
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label onClick={toggleSidebar} className="btn bg-transparent border-0 shadow-transparent drawer-button lg:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </label>

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                        <img src={user.photoURL} alt="User Avatar" className="rounded-full" />

                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><button className="btn bg-transparent border-0 shadow-transparent" onClick={handleLogout}>
                            Logout
                        </button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;