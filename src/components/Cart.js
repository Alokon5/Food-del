import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { IoCloseCircleSharp } from "react-icons/io5";

const Cart = ({activeCart,setActiveCart}) => {

  const cartData = useSelector(state=>state.cart);
  console.log(cartData)

  const totolItems = cartData.reduce((total,item)=> total+item.qnt,0);
  const totalPrice = cartData.reduce((total,item)=> total+item.qnt*item.price,0)


  return (
    <div className={`fixed    text-black right-0 top-0 w-screen lg:w-1/4 bg-white h-screen overflow-scroll ${activeCart ? " translate-x-0":"  translate-x-full"}`}>
      <div className=' mt-2 flex justify-between mx-auto'>
        <span className='  ml-4 font-bold text-xl'>My orders</span>
        <button className=' mr-4 bg-black text-white px-2 rounded-full' onClick={()=>setActiveCart(!activeCart)}><IoCloseCircleSharp/></button>
      </div>
       {
        cartData.map((food)=>{
       
         return <CartItem activeCart={activeCart} setActiveCart={setActiveCart} id={food.id} image={food.image} name={food.name} price={food.price} desc={food.desc} cat={food.category} rating={food.rating} key={food.id} qnt={food.qnt} />
          
        })
       }
      
      <div className='ml-4'>
        <h3>Items: {totolItems}</h3>
        <h3>Total Amount:{totalPrice} </h3>
        <hr/>
        <button className=' p-2 rounded-3xl text-white mt-2 bg-black'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart