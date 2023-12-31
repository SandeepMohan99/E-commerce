import { createSlice } from "@reduxjs/toolkit";



const wishListSlice= createSlice({
    name:'wishlist',
    initialState:[], //it can store more than one item

    reducers:{
        //actions
        //function / logic to add items to wishlist array

        addToWishList : (state , action) =>{
           state.push(action.payload)
        },

        //function to remove items from wishlist
         
        removeFromWishlist : (state,action)=>{
            //filter returns a new array satisfying the condition inorder to add new array into state we need to return it
             return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishList, removeFromWishlist} = wishListSlice.actions
export default wishListSlice.reducer