import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDetails from './components/products/details';
import ShoppingCart from './components/cart/checkout';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './components/error-page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: '/products/:id',
    element: <ProductDetails />
  },
  {
    path: '/cart',
    element: <ShoppingCart />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

