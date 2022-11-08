import React from "react";
import { connect } from "react-redux";
import { When } from 'react-if';
import { updateCategory } from '../../store/categories';
import { updatedProducts } from '../../store/products';

import { Box, createTheme, Container, Divider, ThemeProvider, Typography } from '@mui/material';

let theme = createTheme({
  spacing: 30,
  styleOverrides: {
    Container: {
      fontSize: '2rem',
    }
  }
});

function Categories(props) {

  const { categories, updateCategory, activeCategory } = props;
  console.log(categories, updateCategory, activeCategory);

  let categoriesToRender = categories.filter(category => category.name !== activeCategory);
console.log(categoriesToRender, activeCategory);
  return (
    <ThemeProvider theme={theme} >
      <Box sx={{margin: '30px'}}>
        <Typography variant="h5" >Browse our Categories</Typography>
        <Box sx={{display: 'flex', fontSize: '5rem'}}>
          {
            categories.map((category, index) => (
              <When condition={category.name !== activeCategory}>
                <Typography sx={{marginRight: '15px', color: '#0288d1'}} key={`category-${index}`} onClick={() => {updateCategory(category); updatedProducts(category)}}>{category.name.toUpperCase()}</Typography>
                <Divider sx={{marginRight: '15px'}} orientation="vertical" flexItem />
              </When>
            ))
          }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = ({category, products }) => { // arguement represents a feild from the store object. Destructure the store object with the property that has the feilds needed for the component, once the store feild is destructure, use dot notation to grab the values from within that object's property
  // console.log('categoriessss',categories);
  return {
    categories: category.categories,
    activeCategories: category.activeCategory,
  }
};

const mapDispatchToProps = {
  updateCategory,
  updatedProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);