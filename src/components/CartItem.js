import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/CartSlice';
import { increment } from '../redux/CartSlice';
import { decrement } from '../redux/CartSlice';
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-hot-toast';


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
    <div className='flex m-auto border-b-2 p-2 py-4 shadow-lg justify-evenly mt-4   '>
     <img src={image} alt='image' width={50} className=' aspect-square rounded-xl '  />
     
      <div>
      <h2 className=' font-bold'>{name.slice(0,10)}</h2>
      <p className=' text-green-500'>{price}</p>
      </div>
      <div>
        <button onClick={()=>{deletHandler(id); toast.success(`${name.slice(0,5)}... removed from cart`)}}><AiFillDelete className='text-xl'/></button>
        <div className='flex gap-1'>
          <button onClick={()=>{dispatch(decrement(id))}} className='border hover:bg-black hover:text-white px-2'>
            -
          </button>
          <div className=' font-bold'>{qnt}</div>
          <button onClick={()=>{dispatch(increment(id))}} className='px-2 hover:bg-black hover:text-white border text-center'>+</button>
        </div>

      </div>
    </div>
  )
}

export default CartItem