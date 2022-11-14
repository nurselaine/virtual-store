import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: ''
  },
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    updateCategory: (state, action) => {
      state.activeCategory = action.payload.name;
    },
  }
});

export const { updateCategory, getCategories } = categoriesSlice.actions;

// let initialState = {
//   categories: [
//     // { name: 'electronics', displayName: 'Electronics', description: 'Category Description' },
//     // { name: 'food', displayName: 'Food', description: 'Category Description'  },
//     // { name: 'clothing', displayName: 'Clothing', description: 'Category Description'  },
//   ],
//   activeCategory: ''
// };

// function categoriesReducer(state = initialState, action){
//   const { type, payload } = action;

//   switch(type){
//     case 'UPDATE_ACTIVE': return {...state, activeCategory: payload.name};
//     case 'GET_CATEGORIES': return {...state, categories: payload};
//     default: return state;
//   }
// };

// export const getActiveCategory = (category) => async (dispatch) => {
//   console.log(category, 'update category');
//   dispatch(updateCategory(category))
// };

export const getAllCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  console.log(response.data.results);
  dispatch(getCategories(response.data.results));
};

// export const setCategories = (data) => {
//   return {
//     type: 'GET_CATEGORIES',
//     payload: data,
//   }
// }
// export const { updateCategory } = categoriesSlice.actions;


export default categoriesSlice.reducer;