import React from 'react';

const Navbar = () => {
    const day = new Date().toDateString();
    console.log(day);

    return (
        <div className='text-white flex flex-wrap justify-center lg:justify-between md:justify-between items-center pr-10 pl-10 bg-[#212121] opacity-95 sticky top-0 relative'>
            <div className='flex flex-col'>
                <div>
                    {day}
                </div>
                <div>
                    <h1 className='font-bold text-3xl'>
                        <span className='text-orange-600'>Fo</span>
                        <span className=''>ode</span>
                        <span className='text-green-600'>li</span>
                    </h1>
                </div>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Search here'
                    className='w-full lg:w-96 shadow-md rounded-3xl focus:bg-gray-300 text-black focus:outline-none focus:border-0 p-2'
                    name="searchTerm"
                />
            </div>
        </div>
    );
}

export default Navbar;