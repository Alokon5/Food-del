import React, { useEffect, useState } from 'react'
import FoodCard from './FoodCard'


const FoodItem = ({setBounce,FoodData}) => {



  return (
    <div className=' flex flex-wrap justify-center p-10 pl-10 items-center gap-8 bg-black  '>
{
    FoodData?.map((food)=>{
       return <FoodCard id={food.id} image={food.img} name={food.name} price={food.price} desc={food.desc} cat={food.category} rating={food.rating} key={food.id} setBounce={setBounce} />
    })
}
    
    </div>
  )
}

export default FoodItem