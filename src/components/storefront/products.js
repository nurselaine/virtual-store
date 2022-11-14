import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { updatedProducts } from "../../store/products";
import { getItemToAdd, addToCard } from "../../store/cart";
import { decrementStock } from "../../store/products";
import { getAllProducts } from "../../store/products";

import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Products(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);

  const products = useSelector((state) => state.products.products);
  console.log(products);
  const categoryProducts = useSelector((state) => state.products.categoryProducts);
  console.log(categoryProducts);

  const handleAddToCart = (product) => {
    console.log('handle add to cart');
    let updatedProduct = {...product, inStock: product.inStock - 1};
    getItemToAdd(updatedProduct);
    dispatch(addToCard(updatedProduct));
    dispatch(decrementStock(updatedProduct));
  }

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
                <Typography variant="h6">${product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleAddToCart(product)} sx={{ color: '#0288d1' }}>ADD TO CART</Button>
                <Button sx={{ color: '#0288d1' }}>
                  <Link style={{textDecoration: 'none'}} to={`/products/${product._id}`}><Typography>VIEW DETAILS</Typography></Link>
                </Button>
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
  // addToCart,
  decrementStock,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);