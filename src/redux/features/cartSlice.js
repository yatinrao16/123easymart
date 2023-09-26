import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {

            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (state.carts[ItemIndex] > 0) {
                state.carts[ItemIndex].quantity += 1
            } else {
                const temp = { ...action.payload,quantity: 1 }
                state.carts = [...state.carts, temp]

            }
        },

        // remove perticular items
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },

        // remove single items
        removeSingleItems:(state,action)=>{
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if(state.carts[ItemIndex_dec].quantity >=1){
                state.carts[ItemIndex_dec].quantity -= 1
            }

        },

        // clear cart
        emptycartItem:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart,removeToCart,removeSingleItems ,emptycartItem} = cartSlice.actions;

export default cartSlice.reducer;


