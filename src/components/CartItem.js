import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/CartSlice';
import { increment } from '../redux/CartSlice';
import { decrement } from '../redux/CartSlice';
import { AiFillDelete } from "react-icons/ai";


const CartItem = ({id,image ,name,price,rating,qnt,}) => {
  const dispatch = useDispatch();

  console.log(name)
  console.log(image)

  function deletHandler(id){
    dispatch(remove(id))


  }



  // function incrHandler(id){
  //   dispatch(incrementItem(id))
  // }
  return (
    <div className='flex m-2 border-b-2 p-2 shadow-lg justify-evenly mt-4'>
     <img src={image} alt='image' width={50} className=' aspect-square rounded-xl '  />
     
      <div>
      <h2>{name}</h2>
      <p>{price}</p>
      </div>
      <div>
        <button onClick={()=>{deletHandler(id)}}><AiFillDelete/></button>
        <div className='flex gap-1'>
          <button onClick={()=>{dispatch(decrement(id))}} className='border hover:bg-black hover:text-white px-2'>
            -
          </button>
          <div>{qnt}</div>
          <button onClick={()=>{dispatch(increment(id))}} className='px-2 hover:bg-black hover:text-white border text-center'>+</button>
        </div>

      </div>
    </div>
  )
}

export default CartItem