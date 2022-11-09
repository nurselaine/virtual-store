import { render, screen, fireEvent } from '@testing-library/react';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import categoriesReducer from '../store/categories';
import productsReducer from '../store/products';
import cartReducer, { addToCart } from '../store/cart';

describe('Virtual Store State', () => {

  const reducers = combineReducers({
    category: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  });

  const store = createStore(reducers);

  test('Displays a list of available product categories', () => {
    let state = store.getState();

    const expectedCategories = [
      { name: 'electronics', displayName: 'Electronics', description: 'Category Description' },
      { name: 'food', displayName: 'Food', description: 'Category Description'  },
      { name: 'clothing', displayName: 'Clothing', description: 'Category Description'  },
    ];
    const expectedActiveCategory = '';

    expect(state.category.categories).toEqual(expect.arrayContaining(expectedCategories));
    expect(state.category.categories[0]).toEqual(expect.objectContaining({ name: 'electronics', displayName: 'Electronics', description: 'Category Description' }));
    expect(state.category.activeCategory).toEqual(expectedActiveCategory);
  });

  test('Displays a list of available products from each category', () => {
    let state = store.getState();

    const expectedProducts = [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ];

    expect(state.products.products).toEqual(expect.arrayContaining(expectedProducts));
    expect(state.products.products[2]).toEqual(expect.objectContaining({ name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 }));
  });

  test('Cart updates when user clicks on add to cart button', () => {
    let state = store.getState();

    const expectedCart = [];

    expect(state.cart.cart).toEqual(expect.arrayContaining(expectedCart));

    store.dispatch(addToCart({ name: 'Bread', category: 'food', price: 2.39, inStock: 90 }));
    const expectedFilledCart = [{ name: 'Bread', category: 'food', price: 2.39, inStock: 90 }]

    console.log(state);

    expect(state.cart.cart).toEqual(expect.objectContaining({ name: 'test' }));
    expect(state.cart.cart).toEqual(expect.arrayContaining(expectedFilledCart));
  });

  test('Displays a shopping cart with contents of cart state', () => {
    let state = store.getState();

    store.dispatch(addToCart({name: 'test1'}));
    store.dispatch(addToCart({name: 'test2'}));

    const li_1 = screen.getByTestId('cart-list-0');
    const li_2 = screen.getByTestId('cart-list-1');

    expect(li_1).toHaveTextContent(state.cart.cart[0]);
    expect(li_2).toHaveTextContent(state.cart.cart[1]);
  });

})