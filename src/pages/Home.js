import React, { useReducer } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import { useState } from 'react'

import FoodData from '../data/data'
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  

  const [activeCart,setActiveCart] = useState(false);
  

  function cartHandler(){
    setActiveCart(!activeCart);
  }

  
 
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
       
    }
      
  }

  
   const [state,dispatch] =useReducer(reducer,FoodData);

  

  return (
    <div className=' h-screen relative '>
     <Navbar FoodData={FoodData} />
     <Category dispatch={dispatch}/>
     <FoodItem FoodData={state} />
     <button onClick={cartHandler} className='fixed top-24 lg:fixed   right-5 p-3 rounded-3xl bg-black'><FaShoppingCart/></button>
     <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
    </div>
  )
}

export default Home