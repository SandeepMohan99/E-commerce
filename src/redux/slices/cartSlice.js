import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],

    reducers:{
        
        //function to add items into cart

        addToCart : (state,action)=>{
            state.push(action.payload)
        },
        
        //function to remove items from cart
        removeFromCart : (state, action)=>{
           return state.filter(item=>item.id!=action.payload)
        },

        //function to remove all from cart
        emptyCart : (state)=>{
           return state = []
        }

    }
})

export const {addToCart , removeFromCart, emptyCart} = cartSlice.actions

export default cartSlice.reducer