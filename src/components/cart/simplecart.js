import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";
import { incrementStock, updateProductInventory } from "../../store/products";

import { Box, Typography } from '@mui/material';
import { useTheme } from "@emotion/react";

function SimpleCart(props) {
  const { cart, removeFromCart, incrementStock } = props;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateProductInventory())
  // }, [incrementStock]);


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
              <button key={`delete-${index}`} onClick={() => {removeFromCart(product); incrementStock(product)}}>delete</button>
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
  removeFromCart,
  incrementStock,
  updateProductInventory,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);