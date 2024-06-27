import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Success = () => {
  return (
    <div className=' flex flex-col gap-5 justify-center items-center h-screen w-screen'>
     
      <div className='flex flex-col gap-5 justify-center items-center'>
      <h1 className=' text-3xl animate-bounce duration-200'>Order placed</h1>
      <Link to='/' className=' px-2 py-2 bg-gray-300 text-black font-bold rounded-xl'>Eat more!</Link>
      </div>
     
    </div>
  )
}

export default Success
