import React, { useState } from 'react'

const Category = ({data,dispatch}) => {

  const [click,setClick] = useState("All");
  console.log(click)
 
  return (
    <div className=' flex flex-col justify-start items-start mt-5 ml-5 gap-2 mb-2 '>

      <h3 className=' text-2xl'>Find the best food...</h3>
      <hr className=' text-black'></hr>
      <div className=' flex gap-4 flex-wrap'>
        <button onClick={()=>{dispatch({type:"All"}); setClick("All")}} className={`py-1 px-4    rounded-3xl ${click==="All" ?"bg-gray-300 transition-all duration-75 hover:bg-gray-300 text-black ":""} `} >All</button>
        <button onClick={()=>{dispatch({type:"Lunch"});setClick('Lunch')}} className={` py-1 px-4  rounded-3xl ${click==="Lunch" ?"bg-gray-300 transition-all duration-75 hover:bg-gray-300 text-black":""} `}>Lunch</button>
      <button onClick={()=>{dispatch({type:"Breakfast"});setClick('Breakfast')}} className={` py-1 px-4 0  rounded-3xl ${click==="Breakfast" ?"bg-gray-300 transition-all duration-75 hover:bg-gray-300 text-black":""}  `}> Breakfast</button>
        <button onClick={()=>{dispatch({type:"Dinner"});setClick('Dinner')}} className={` py-1 px-4   rounded-3xl ${click==="Dinner" ?"bg-gray-300 transition-all duration-75 hover:bg-gray-300 text-black":""} `} >Dinner</button>
        <button onClick={()=>{dispatch({type:"Snacks"});setClick('Snacks')}} className= {`py-1 px-4   rounded-3xl ${click==="Snacks" ?"bg-gray-300 transition-all duration-75 hover:bg-gray-300 text-black":""}  `} >Snacks</button>
       
        

      </div>
    </div>
  )
}

export default Category