import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://i.pinimg.com/1200x/80/41/46/8041461fe30932a00bc4cd6cc195a91a.jpg",
        name: "Projector",
        cost: 200,
        quantity: 0
    },
    {
        img: "https://i.pinimg.com/1200x/4c/7d/3f/4c7d3fe08dc186ffbb086b64e50fb4ef.jpg",
        name: "Speakers",
        cost: 35,
        quantity: 0, 
    },
    {
        img: "https://i.pinimg.com/1200x/17/cb/b6/17cbb69b6b356aaabdcb5c1ad2bacad1.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://i.pinimg.com/736x/ee/f3/4f/eef34fc92c8cfa572174cfedc620a7c7.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0, 
    },
    {
        img: "https://i.pinimg.com/736x/40/bf/85/40bf85fc6ea21f4f62561351b9e42fb5.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
