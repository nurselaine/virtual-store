import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './products';

let reducers = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools());
}