import cartReducer, { addToCart, removeFromCart } from "../store/cart";
import { legacy_createStore as createStore, combineReducers } from "redux";

describe('Cart Reducer', () => {

  const reducers = combineReducers({
    cart: cartReducer,
  });

  const store = createStore(reducers);

  test('It provides an inital state', () => {
    let state = store.getState();

    expect(state.cart).toEqual(expect.arrayContaining([]));
  });

  it('increments item count', () => {
    let state = store.getState();
    expect(state.cart.cart.length).toEqual(0);
    let productOne = {name: 'test', price: 5}
    let productTwo = {name: 'test2', price: 10}

    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));
    state = store.getState();

    expect(state.cart.cart.length).toEqual(2);
    expect(state.cart.cart[0]).toEqual(expect.objectContaining(productOne));
    expect(state.cart.cart[1]).toEqual(expect.objectContaining(productTwo));
  });

  it('It removes products from the cart', () => {
    let state = store.getState();

    let productOne = {name: 'test', price: 5}
    let productTwo = {name: 'test2', price: 10}

    store.dispatch(removeFromCart(productOne));
    state = store.getState();

    expect(state.cart.cart.length).toEqual(1);
    expect(state.cart.cart[0]).toEqual(productTwo);

    store.dispatch(removeFromCart(productTwo));
    state = store.getState();
    
    expect(state.cart.cart.length).toEqual(0);
  });
} )