import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getItemToRemove } from "../../store/cart";
import { incrementStock, updateProductInventory } from "../../store/products";

import { Box, Typography } from '@mui/material';
import { useTheme } from "@emotion/react";

function SimpleCart() {
  // const { cart, removeFromCart, incrementStock } = props;
  // console.log(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductInventory())
  }, [incrementStock]);

  const cart = useSelector(state => state.cart);
  console.log(cart);

  const handleRemoveFromCart = (product) => {
    // getItemToRemove(product);
    // dispatch(incrementStock(product));
    console.log('hello');
  }


  return (
    <Box
      sx={{
        position: 'fixed',
        right: '10px',
        top: '60px',
        borderBottom: 'dashed',
        width: '10vw'
      }}
    >
      <ul style={{padding: '0'}}>
        {cart.map((product, index) => {
          return (
            <div key={`cart-list-${index}`}>
              <li data-testid={`cart-list-${index}`} style={{listStyle: 'none', color: '#0288d1'}}><Typography variant="h6">{product.name}</Typography></li>
              <button key={`delete-${index}`} onClick={() => handleRemoveFromCart(product)}>delete</button>
            </div>
          )
        })}
      </ul>
    </Box>
  );
}

const mapStateToProps = ({cart}) => ({
  cart: cart.cart,
});

const mapDispatchToProps = {
  // removeFromCart,
  incrementStock,
  updateProductInventory,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);