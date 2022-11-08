import { render, screen, fireEvent } from '@testing-library/react';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import categoriesReducer, { updateCategory } from '../src/store/categories';
import { updatedProducts } from '../src/store/products';

describe('Virtual Store State', () => {

  const reducers = combineReducers({
    category: categoriesReducer,
    products: productsReducer,
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
    expect(state.category.categories[0]).toEqal(expect.objectContaining({ name: 'electronics', displayName: 'Electronics', description: 'Category Description' }));
    expect(state.category.activeCategory).toEqual(expectedActiveCategory);
  });

  test('Displays a list of available products from each category', () => {
    let store = store.getState();

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

})