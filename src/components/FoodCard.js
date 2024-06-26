import React from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/CartSlice';

const FoodCard = ({id,image,name ,price,desc,cat,rating}) => {
   
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
      <p className={`${rating > 4.5 ? "text-green-600":"text-red-600"}`}>Ratings : {rating}</p>
      <p>{cat}</p>
      </div>
      
      
      <button className='p-2 rounded-lg bg-black' onClick={()=>{dispatch(addData({id,image,name,price,rating,qnt:1}));}}>Add to cart</button>
    </div>
  )
}

export default FoodCard