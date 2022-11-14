import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    categoryProducts: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
      state.categoryProducts = action.payload;
    },
    updateActiveProducts: (state, action) => {
      console.log('update active products', action.payload);
      let result = state.products.filter(product => product.category === action.payload.name);
      console.log(result);
      state.categoryProducts = result;
    },
    incrementStock: (state, action) => {
      state.products = state.products.map(product => product.name === action.payload.name ? action.payload : product);
    }, 
    decrementStock: (state, action) => {
      state.products = state.products.map(product => product.name === action.payload.name ? action.payload : product);
    },
  }
})

export const { getProducts, updateActiveProducts, incrementStock, decrementStock } = productSlice.actions;

// let initialState = {
//   products: [],
//   categoryProducts: [],
// };

// function productsReducer(state = initialState, action){
//   const { type, payload } = action;

//   switch(type){
//     case 'GET_PRODUCTS': return {products: payload, categoryProducts: payload};
//     case 'UPDATE_ACTIVE': return {...state, categoryProducts: state.products.filter(product => product.category === payload.name)};
//     case 'INCREMENT_STOCK': return {...state, products: state.products.map(product => product.name === payload.name ? payload : product)};
//     case 'DECREMENT_STOCK': return {...state, products: state.products.map(product => product.name === payload.name ? payload : product)};
//     case 'UPDATE_INVENTORY': return {...state, products: [...state.products, payload]};
//     default: return state;
//   }
// };

export function updatedProducts(category){
  console.log(category);
  return {
    type: 'UPDATE_ACTIVE',
    products: category,
  }
};
export const getAllProducts = () => async (dispatch, getState) => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  console.log(results.data.results);
  dispatch(getProducts(results.data.results));
};

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
};

// export const incrementStock = (product) => {
//   return {
//     type: 'INCREMENT_STOCK',
//     payload: product,
//   }
// };

// export const decrementStock = (product) => {
//   return {
//     type: 'DECREMENT_STOCK',
//     payload: product,
//   }
// };


export const updateProductInventory = (product) => async (dispatch, getState) => {
console.log(product);
  let rez = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  console.log('updated product inventory', rez);
  dispatch(setUpdateProductInventory(rez));
};

export const setUpdateProductInventory = (data) => {
  return {
    type: 'UPDATE_INVENTORY',
    payload: data,
  }
}

export default productSlice.reducer;