

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Category Description' },
    { name: 'food', displayName: 'Food', description: 'Category Description'  },
    { name: 'clothing', displayName: 'Clothing', description: 'Category Description'  },
  ],
  activeCategory: ''
};

function categoriesReducer(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'UPDATE_ACTIVE': return {...state, activeCategory: payload.name};
    default: return state;
  }
};

export const updateCategory = (category) => {
  return {
    type: 'UPDATE_ACTIVE',
    payload: category,
  }
};

export default categoriesReducer;