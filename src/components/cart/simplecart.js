import React from "react";
import { connect } from "react-redux";

import { Box, Typography } from '@mui/material';
import { useTheme } from "@emotion/react";

function SimpleCart(props) {
  const { cart } = props;
  const theme = useTheme();



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
            
            <li data-testid={`cart-list-${index}`} style={{listStyle: 'none', color: '#0288d1'}}><Typography variant="h6">{product.name}</Typography></li>
          )
        })}
      </ul>
    </Box>
  );
}

const mapStateToProps = ({cart}) => ({
  cart: cart.cart,
});

export default connect(mapStateToProps)(SimpleCart);