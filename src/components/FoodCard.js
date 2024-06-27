import React from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/CartSlice';
import toast from 'react-hot-toast';

const FoodCard = ({id,image,name ,price,desc,cat,rating,setBounce}) => {
   
  const dispatch = useDispatch();


  
  return (
    <div className='flex flex-col gap-2 p-5 bg-[#212121] mt-5 rounded-xl ' >
        
      <img src={image} alt='image' width={100} className=' aspect-square rounded-xl '  />
      <div className=' flex gap-4'>
      <h1 className=' font-bold'>{name.slice(0,15)}</h1>
      <p className=' text-green-600'>Rs.{price}</p>
      </div>
      <div>
      <p>{desc.slice(0,15)}...</p>
      <p className={`${rating > 4.5 ? "text-green-600":"text-red-600"}`}><span className=' text-white'>Ratings :</span> {rating}</p>
      <p>Category : {cat}</p>
      </div>
      
      
      <button className='p-2 rounded-lg bg-black hover:bg-gray-300 hover:text-black' onClick={()=>{dispatch(addData({id,image,name,price,rating,qnt:1}));toast.success(`${name.slice(0,5)}... added to cart`);setBounce(true);setTimeout(()=>{setBounce(false)},700)}}>Add to cart</button>
    </div>
  )
}

export default FoodCard