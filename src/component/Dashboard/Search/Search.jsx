import React from 'react';
import bgimg from '/images/bg-2.png'
import img from '/images/bg-1.png'

const Search = () => {
    return (
        <div className='bg-white grid grid-cols-1 lg:grid-cols-2 m-5 h-full p-5'>
            <div>
                <h1 className='text-xl'>I'm Looking for Message Therapist Near...</h1>
                <p>In using this site, i agree to be bound by the <span>Terms of Service</span>and <span>Privacy Policy</span></p>
                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={bgimg} className='absolute z-0 bottom-0 top-0 left-0'/>
                <img src={img} className='ml-auto relative z-10'/>
            </div>
        </div>
    );
};

export default Search;