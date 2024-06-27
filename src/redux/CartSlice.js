import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast';

const cartSlice = createSlice({

    name :'cart',
    initialState :[],
    reducers:{
        addData:(state,action)=>{
            const existingItem = state.find((item)=> item.id ===  action.payload.id);
            
            if(existingItem){
              return state = state.map((item)=> item.id === action.payload.id ? {...item,qnt:item.qnt+1}:item);
            }else{
                state.push(action.payload);
                // toast.success("Item Added to Cart");
            }
               
        },
        remove:(state,action)=>{
        return  state.filter((item)=> item.id !== action.payload)
        },
        increment:(state,action)=>{
            return state.map((item)=> item.id === action.payload ? {...item,qnt:item.qnt+1}:item)
        },
        decrement:(state,action)=>{
            return state.map((item)=> item.id === action.payload ? {...item,qnt: item.qnt > 1 ? item.qnt-1:1}:item)
        },
        checkout:(state,action)=>{
            state.splice(0,state.length);
        }
        
          
    }
})

export const {addData,remove,increment,decrement,checkout} = cartSlice.actions;
export default cartSlice.reducer;