import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  products: [],
  categoryProducts: [],
};



function productsReducer(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'GET_PRODUCTS': return {products: payload, categoryProducts: payload};
    case 'UPDATE_ACTIVE': return {...state, categoryProducts: state.products.filter(product => product.category === payload.name)};
    case 'INCREMENT_STOCK': return {...state, products: state.products.map(product => {
      if(product.name === payload.name){
        return {
          ...product,
          inStock: product.inStock + 1,
        }
      }
      return product;
    })};
    case 'DECREMENT_STOCK': return {...state, products: state.products.map(product => {
      if(product.name === payload.name){
        return {
          ...product,
          inStock: product.inStock - 1,
        }
      }
      return product;
    })};
    case 'UPDATE_INVENTORY': return {...state, products: state.products.map(product => product._id === payload._id ? payload : product)};
    default: return state;
  }
};

export function updatedProducts(category){
  return {
    type: 'UPDATE_ACTIVE',
    products: category,
  }
};
export const getProducts = () => async (dispatch, getState) => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  console.log(results.data.results);
  dispatch(setProducts(results.data.results));
};

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
};

export const incrementStock = (product) => async(dispatch, getState) => {
  let updatedProduct = {...product, inStock: product.inStock + 1};
  console.log(updatedProduct);
  let rez = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  console.log('updated product inventory', rez);
  dispatch(setUpdateProductInventory(rez));
  return {
    type: 'INCREMENT_STOCK',
    payload: product,
  }
};

export const decrementStock = (product) => async(dispatch, getState) => {
  let updatedProduct = {...product, inStock: product.inStock - 1};
  console.log(updatedProduct);
  let rez = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, updatedProduct);
  console.log('updated product inventory', rez);
  dispatch(setUpdateProductInventory(rez));
  return {
    type: 'DECREMENT_STOCK',
    payload: product,
  }
};


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

export default productsReducer;