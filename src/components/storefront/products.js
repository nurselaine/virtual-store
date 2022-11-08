import React from "react";
import { connect } from "react-redux";
import { updatedProducts } from "../../store/products";

import { Card, CardActions, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';

function Products(props) {
  const { products } = props;
  console.log(products);
  
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin: '30px'}}> 
          {
            products.map((product, index) => (
              <Grid item xs={4} sx={{boxShadow: '4'}} >
              <Card key={`product-${index}`} sx={{maxWidth: 345}}>
                <CardMedia 
                  component="img"
                  height="140"
                  image='./logo192.png'
                  alt="placeholder picture"
                />
                <CardContent>
                  <Typography variant="h6">{product.displayName}</Typography>
                  <Typography variant="h6">{product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{color: '#0288d1'}}>ADD TO CART</Button>
                  <Button sx={{color: '#0288d1'}}>VIEW DETAILS</Button>
                </CardActions>
              </Card>
              </Grid>
            ))
          }  
    </Grid>
  );
}

const mapStateToProps = ({products}) => ({
  products: products.products,
});

const mapDispatchToProps = {
  updatedProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);