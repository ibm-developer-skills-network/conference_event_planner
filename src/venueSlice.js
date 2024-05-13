// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
  
  ],
  reducers: {
    
    incrementQuantity: (state, action) => {
     
    },
    decrementQuantity: (state, action) => {
      
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
