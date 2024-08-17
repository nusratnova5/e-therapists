import React, { useState } from 'react';
import { BsExclamationSquare } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LuSettings } from 'react-icons/lu';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { TiThLargeOutline } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import avatar from '/images/user.png'

const infoFirst = [
    {
        icon: <TiThLargeOutline />,
        title: "Home",
        to: "dashboard"
    },
    {
        icon: <FiUsers />,
        title: "New Listing",
        to: "undefined"
    },
    {
        icon: <RiSearchLine />,
        title: "Search",
        to: "undefined"
    },
    {
        icon: <IoDocumentTextOutline />,
        title: "About",
        to: "undefined"
    },
    {
        icon: <MdFavoriteBorder />,
        title: "Favorites",
        to: "undefined"
    },
]
const infoSecond = [
    {
        icon: <BsExclamationSquare />,
        title: "Help Center",
        to: "undefined"
    },
    {
        icon: <LuSettings />,
        title: "Settings",
        to: "undefined"
    },
]

const SideBar = ({ isOpenSidebar, toggleSidebar }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (title) => {
        setActiveButton(title);
    };
    return (
        <div className="drawer drawer-end lg:drawer-open z-20">
            <input checked={isOpenSidebar} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label onClick={toggleSidebar} aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-0 w-80 lg:min-h-full  bg-white text-white">
                    <li>
                        <div className="hidden lg:block flex-1 p-4">
                            <Link to={'/'} className="btn bg-transparent border-none shadow-none text-3xl text-sky-blue flex-nowrap">E-Therapists</Link>
                        </div>

                        <div className='flex lg:hidden flex-col items-end bg-dark-blue gap-0 rounded-none'>
                            <img src={avatar} alt="User Avatar" className="rounded-full w-12 h-12" />
                            <h1 className='text-lg'>sagar soni</h1>
                            <p className='text-dark-black'>sagar@gmail.com</p>
                        </div>
                    </li>
                    {infoFirst?.map((item) => {
                        return <li className=''>
                            <NavLink to={`/${item?.to}`} className='text-dark-gray bg-transparent p-3'>
                                <p className=' texl-xl'>{item?.icon}</p>
                                <p className=''>{item?.title}</p>
                            </NavLink>
                        </li>
                    })}
                    <hr className='text-dark-gray m-3' />
                    {infoSecond?.map((item) => {
                        return <li className=''>
                            <NavLink to={`/${item?.to}`} className='text-dark-gray bg-transparent p-3'>
                                <p className='texl-xl'>{item?.icon}</p>
                                <p className=''>{item?.title}</p>
                            </NavLink>
                        </li>
                    })}
                    <li>
                        <NavLink to='therapists'><p className='text-dark-gray'>Add therapists</p></NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default SideBar;