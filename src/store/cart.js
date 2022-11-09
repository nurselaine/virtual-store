let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case 'ADD_TO_CART': return state.cart.includes(payload) ? state : { cart: [ ...state.cart, payload ]};
    case 'REMOVE_FROM_CART': return state.cart.filter(product => product !== payload);
    default: return state;
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  }
}

export default cartReducer;