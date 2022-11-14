import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from './middleware/logger';
import thunk from './middleware/thunk';

const preloadedState = {
  category: {
    categories: [],
    activeCategory: '',
  },
  products: {
    products: [],
    categoryProducts: [],
  },
  cart: {cart: []},
}

export const store = configureStore({
  reducer: {
    category: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

// let reducers = combineReducers({
//   category: categoriesReducer,
//   products: productsReducer,
//   cart: cartReducer,
// });

// export default function store(){
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }