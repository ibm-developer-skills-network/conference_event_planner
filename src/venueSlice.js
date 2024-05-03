// venueSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
  name: "venue",
  initialState: [
    {
      img: "https://triggerxchange.com/images/Conference%20room%20Mob%20Ban.webp",
      name: "Conference Room (12 People)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Auditorium_room_107.jpg",
      name: " Auditorium Hall (200 people)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: "https://www.bloomsonly.com/wpblog/wp-content/uploads/2019/10/6.jpg",
      name: "Presentation Room (50 People)",
      cost: 700,
      quantity: 0,
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5d08d53ad8f83100015e27be/1561143085264-DEBXO24Y11Y0X4IXJLEI/IMG_0963.jpg",
      name: "Green Room",
      cost: 900,
      quantity: 0,
    },
    {
      img: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/08/Web_72DPI-20190208-WeWork-Nogizaka-Conference-Room-1A-2-1440x810.jpg",
      name: "Activity Room",
      cost: 1100,
      quantity: 0,
    },
   
   
    // {
    //   img: "https://i.pinimg.com/originals/27/9f/ae/279fae97d198471df43b1dace3b2d084.jpg",
    //   name: "Signage",
    //   cost: 500,
    //   quantity: 0,
    // },
  ],
  reducers: {
    incrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
