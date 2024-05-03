import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTJgSJdqWos5IV-HSG9GisNWuhlCnI6H4dML31peMEg&s",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_640.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_640.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/03/28/12/15/chairs-2181977_640.jpg",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    // {
    //   img: "https://m.media-amazon.com/images/I/61aAXzIcs5L._AC_UF1000,1000_QL80_.jpg",
    //   name: "In-ear Monitors",
    //   cost: 80,
    //   quantity: 0,
    // },
    {
      img: "https://i.pinimg.com/originals/27/9f/ae/279fae97d198471df43b1dace3b2d084.jpg",
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
