import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';
// import logger from './middleware/logger';
import thunk from './middleware/thunk';

let reducers = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}