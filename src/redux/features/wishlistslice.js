import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishs: []
}

// card slice
const wishlistSlice = createSlice({
    name: "wishlistslice",
    initialState,
    reducers: {

        // add to cart
        addToWish: (state, action) => {

            const ItemIndex = state.wishs.findIndex((item) => item.id === action.payload.id);

            if (ItemIndex >= 0) {
                state.wishs[ItemIndex].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.wishs = [...state.wishs, temp]

            }
        },

        // remove perticular iteams
        removeToWish:(state,action)=>{
            const data = state.wishs.filter((item)=>item.id !== action.payload);
            state.wishs = data
        },

    

        // clear cart
        emptycartItem:(state,action)=>{
            state.wishs = []
        }
    }
});

export const { addToWish,removeToWish,emptycartItem} = wishlistSlice.actions;

export default wishlistSlice.reducer;


