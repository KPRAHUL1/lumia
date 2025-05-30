import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    setCart: (state, action) => {
      state.carts.push(action.payload); 
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
