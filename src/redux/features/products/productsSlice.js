import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: 'Casual Shirt 1',
    category: "Men's Clothing",
    price: 50,
    image: 'https://mensworld.com.bd/wp-content/uploads/2023/10/CSF-3379.jpg',
    date: '14/01/2026',
  },
  {
    id: 2,
    name: 'Casual Shirt 2',
    category: "Men's Clothing",
    price: 30,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBhLLP3i6JMqYVCYjzEZarLADRYZ6qsiYLw&s',
    date: '13/01/2026',
  },
  {
    id: 3,
    name: 'Casual Shirt 3',
    category: "Men's Clothing",
    price: 40,
    image: 'https://richmanbd.com/wp-content/uploads/2025/09/23a-600x600.jpg',
    date: '13/01/2026',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload,
      });
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
