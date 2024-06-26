import React, { useState } from 'react'

const Category = ({dispatch}) => {
  const [categories,setCategories] = useState([]);
  const listUniqueCat = ()=>{
         
  }
  return (
    <div className=' flex flex-col justify-start items-start mt-5 ml-5 gap-2 mb-2 '>

      <h3 className=' text-2xl'>Find the best food...</h3>
      <hr className=' text-black'></hr>
      <div className=' flex gap-4 flex-wrap'>
        <button onClick={()=>{dispatch({type:"All"})}} className=' py-1 px-4 hover:bg-gray-300 hover:text-black rounded-3xl '>All</button>
        <button onClick={()=>{dispatch({type:"Lunch"})}} className=' py-1 px-4 hover:bg-gray-300 hover:text-black rounded-3xl '>Lunch</button>
        <button onClick={()=>{dispatch({type:"Breakfast"})}} className=' py-1 px-4 hover:bg-gray-300 hover:text-black rounded-3xl '> Breakfast</button>
        <button onClick={()=>{dispatch({type:"Dinner"})}} className=' py-1 px-4 hover:bg-gray-300 hover:text-black rounded-3xl '>Dinner</button>
        <button onClick={()=>{dispatch({type:"Snacks"})}} className=' py-1 px-4 hover:bg-gray-300 hover:text-black rounded-3xl '>Snacks</button>
       
        

      </div>
    </div>
  )
}

export default Category