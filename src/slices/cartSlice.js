import { createSlice } from "@reduxjs/toolkit";
import {CartItems} from "../constraints/Cart"
const cartItems = localStorage.getItem("cartItems")!==null?JSON.parse(localStorage.getItem("cartItems")):CartItems

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: cartItems
    },
    reducers: {
        removeItem:(state,action)=>{
            const itemUpdate = action.payload
            state.items = delItems(state.items,itemUpdate)
            localStorage.setItem("cartItems",JSON.stringify(state.items))
        },
        updateItem:(state,action)=>{
            const itemUpdate = action.payload
           
            const index = findIndexItem(state.items,itemUpdate)
    
            if(index>-1){
                let temp = [...state.items]
                temp[index] = {...itemUpdate}
                state.items = temp
                localStorage.setItem("cartItems",JSON.stringify(state.items))
            }
        },
        chooseAll:(state,action)=>{
            state.items= state.items.map(item=>{return {...item,choose:true}})
            localStorage.setItem("cartItems",JSON.stringify(state.items))
        },
        unchooseAll:(state,action)=>{
            state.items= state.items.map(item=>{return {...item,choose:false}})
            localStorage.setItem("cartItems",JSON.stringify(state.items))
        },
        deleteAll:(state,action)=>{
            state.items = []
            localStorage.setItem("cartItems",JSON.stringify(state.items))
        }

    }
})

const findItems = (arr,item)=>arr.filter(e=>e.id===item.id)
const findIndexItem = (arr,item)=>arr.findIndex(e=>e.id===item.id) 
const delItems = (arr,item)=>arr.filter(e=>e.id!==item.id)
export const {
    removeItem,
    updateItem,
    chooseAll,
    unchooseAll,
    deleteAll
}=cartSlice.actions

export default cartSlice.reducer