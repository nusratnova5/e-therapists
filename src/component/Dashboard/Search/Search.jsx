import React, { useState } from 'react';
import bgimg from '/images/bg-2.png'
import img from '/images/bg-1.png'

const Search = ({setSearchQuery}) => {
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        setSearchQuery(inputValue)
    }
    return (
        <div className='bg-white mb-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-4 h-full p-5 gap-10 rounded-lg'>
                <div>
                    <h1 className='text-xl text-dark-black font-medium'>I'm Looking for Message Therapist Near...</h1>
                    <p className='text-charcoal my-5'>In using this site, i agree to be bound by the <span className='text-dark-blue underline'>Terms of Service </span>and <span className='text-dark-blue underline'>Privacy Policy</span></p>
                    <div className="relative items-center p-1 hidden lg:flex">
                        <input
                            type="text"
                            onInput={(e) => setInputValue(e.target.value)}
                            placeholder="ZIP code or city name"
                            className="w-full bg-gray border-none placeholder-text-sm px-4 py-3 rounded-xl"
                        />
                        <button onClick={handleSearch} className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-blue text-white text-lg font-semibold px-2 md:px-6 py-1 rounded-lg">
                            GO
                        </button>
                    </div>
                </div>
                <div className='relative z-0'>
                    <img src={bgimg} className='absolute z-0 bottom-0 top-0 left-0' />
                    <img src={img} className='ml-auto relative z-10' />
                </div>
            </div>
            <div className="relative items-center p-1 lg:hidden flex mx-9 pb-4">
                <input
                    type="text"
                    placeholder="ZIP code or city name"
                    className="w-full bg-gray border-none placeholder-text-sm px-4 py-3 rounded-xl"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-blue text-white text-lg font-semibold px-2 md:px-6 py-1 rounded-lg">
                    GO
                </button>
            </div>
        </div>
    );
};

export default Search;