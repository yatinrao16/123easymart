import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import wishlistslice from "./features/wishlistslice";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice,
        allWish:wishlistslice
    }
})

export default store;