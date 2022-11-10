import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { updatedProducts } from "../../store/products";
import { addToCart } from "../../store/cart";
import { decrementStock } from "../../store/products";
import { getProducts } from "../../store/products";

import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';

function Products(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[]);

  const { categoryProducts, addToCart, decrementStock } = props;

  return (
    <Grid container 
      spacing={3} 
      sx={{ margin: 'auto', width: '80vw' }}>
      {
        categoryProducts.map((product, index) => (
          <Grid item xs={4} key={`product-grid-${index}`} sx={{ boxShadow: '6', boxShadow: 'none' }} >
            <Card raised={true} key={`product-${index}`} sx={{ maxWidth: 345, boxShadow: 3, margin: 'auto' }}>
              <CardMedia
                component="img"
                height="140"
                image='./logo192.png'
                alt="placeholder picture"
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                {/* <Typography variant="h6">${product.price}</Typography> */}
              </CardContent>
              <CardActions>
                <Button onClick={() => {addToCart(product); decrementStock(product)}} sx={{ color: '#0288d1' }}>ADD TO CART</Button>
                <Button sx={{ color: '#0288d1' }}>VIEW DETAILS</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
}

const mapStateToProps = ({ products }) => ({
  products: products.products,
  categoryProducts: products.categoryProducts,
});

const mapDispatchToProps = {
  updatedProducts,
  addToCart,
  decrementStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);