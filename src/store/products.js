let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
}

function productsReducer(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case 'UPDATE_ACTIVE': return {products: initialState.products.filter(product => product.category === payload.name)};
    case 'INCREMENT_STOCK': return {products: state.products.map(product => {
      if(product.name === payload.name){
        return {
          ...product,
          inStock: product.inStock + 1,
        }
      }
      return product;
    })};
    case 'DECREMENT_STOCK': return {products: state.products.map(product => {
      if(product.name === payload.name){
        return {
          ...product,
          inStock: product.inStock - 1,
        }
      }
      return product;
    })};
    default: return state;
  }
};

export function updatedProducts(category){
  return {
    products: category,
  }
};

export function incrementStock(product){
  return {
    type: 'INCREMENT_STOCK',
    payload: product,
  }
};

export function decrementStock(product){
  return {
    type: 'DECREMENT_STOCK',
    payload: product,
  }
};

export default productsReducer;