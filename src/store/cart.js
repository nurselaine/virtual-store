import axios from 'axios';
import { decrementStock, incrementStock } from './products';
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(product => product.name !== action.payload.name);
    },
    test: (state, action) => {
      console.log('test', state);
    }
  },
});

export const { addToCard, removeFromCart, test } = cartSlice.actions;


// let initialState = {
//   cart: [],
// };

// const cartReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch(type){
//     case 'ADD_TO_CART': return {cart: [...state.cart, payload]};
//     // case 'ADD_TO_CART': return { cart: [state.cart.map(product => product.name === payload.name ? {...payload, qty: payload.qty + 1} : product)]};
//     // case 'ADD': return [...state.cart, state.cart.includes(payload) ? {...payload, qty: payload.qty + 1} : {...payload, qty: 1}];
//     case 'REMOVE_FROM_CART': return { cart: state.cart.filter(product => product.name !== payload.name)};
//     default: return state;
//   }
// };

export const getItemToAdd = async (product) => {
  console.log('HELLOOOOO');
  // let updatedProduct = {...product, inStock: product.inStock - 1};
  console.log('add item to cart', product);
  // dispatch(test(updatedProduct));
  // dispatch(decrementStock(updatedProduct));
  let rez = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  console.log('update item stock ', rez.data);
};

// const addingToCart = (product) => {
//   return {
//     type: 'ADD_TO_CART',
//     payload: product,
//   }
// }

// export const add = (product) => {
//   return {
//     type: 'ADD',
//     payload: product,
//   }
// }

export const getItemToRemove = (product) => async (dispatch) =>  {
  let updatedProduct = {...product, inStock: product.inStock + 1};
  dispatch(incrementStock(updatedProduct));
  let rez = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  console.log('updated product inventory', rez.data);
  dispatch(removeFromCart(updatedProduct));
};

export default cartSlice.reducer;