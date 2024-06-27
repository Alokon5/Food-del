import React, { useReducer } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import { useState } from 'react'

import FoodData from '../data/data'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux'

const Home = () => {
   const [bounce,setBounce] = useState(false)
  
  const cartData = useSelector(state=>state.cart)
  const totolItems = cartData.reduce((total,item)=> total+item.qnt,0);
  
  const [input ,setInput] = useState("")
  

  const [activeCart,setActiveCart] = useState(false);
  

  function cartHandler(){
    setActiveCart(!activeCart);
  }

  // const filterData = FoodData.filter((item)=>{
  //   return item.name.toLowerCase().includes(input.toLowerCase())
  //  })

  // console.log(filterData)
 
  const reducer = (state,action)=>{
    switch(action.type)
    {
      case 'All':
        return FoodData;
      case 'Lunch':
        return FoodData.filter((item)=>item.category === 'Lunch');
      case 'Breakfast':
        return FoodData.filter((item)=>item.category === 'Breakfast');
      case 'Dinner':
        return FoodData.filter((item)=>item.category === 'Dinner');
     
      case 'Snacks':
          return FoodData.filter((item)=>item.category === 'Snacks');
      case 'input':
        return FoodData.filter((item)=>{
          return item.name.toLowerCase().includes(input.toLowerCase())
         })
       
    }
      
  }

   
   const [state,dispatch] =useReducer(reducer,FoodData);
   
  

  return (
    <div className=' h-screen relative '>
     <Navbar setInput={setInput} dispatch={dispatch} FoodData={FoodData} />
     <Category data={state} dispatch={dispatch}/>
     <FoodItem setBounce={setBounce} FoodData={state} />
     <div className='fixed top-24 lg:fixed right-5 p-1'>
     <button onClick={cartHandler} className={`5 p-3 rounded-3xl bg-black ${bounce?" animate-ping":""} `}><FaShoppingCart /></button>
     <span className=' text-red-600 absolute top-0 right-0 font-bold'>{totolItems}</span>
     </div>
     
     <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
    </div>
  )
}

export default Home