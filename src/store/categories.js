import axios from 'axios';

let initialState = {
  categories: [
    // { name: 'electronics', displayName: 'Electronics', description: 'Category Description' },
    // { name: 'food', displayName: 'Food', description: 'Category Description'  },
    // { name: 'clothing', displayName: 'Clothing', description: 'Category Description'  },
  ],
  activeCategory: ''
};

function categoriesReducer(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'UPDATE_ACTIVE': return {...state, activeCategory: payload.name};
    case 'GET_CATEGORIES': return {...state, categories: payload};
    default: return state;
  }
};

export const updateCategory = (category) => {
  return {
    type: 'UPDATE_ACTIVE',
    payload: category,
  }
};

export const getCategories = () => async (dispatch, getState) => {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(setCategories(response.data.results));
};

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}

export default categoriesReducer;