import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { When } from 'react-if';
// import { updateCategory } from '../../store/categories';
import { updateActiveProducts } from '../../store/products';
import { getAllCategories, updateCategory } from "../../store/categories";

import { Box, createTheme, Divider, ThemeProvider, Typography } from '@mui/material';

let theme = createTheme({
  spacing: 30,
  styleOverrides: {
    Container: {
      fontSize: '2rem',
    }
  }
});

function Categories() {

  
  let dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(getAllCategories());
  }, []);
  
  const categories = useSelector((state) => state.category);
  const activeCategory = useSelector(state => state.activeCategories);
  console.log(categories);

  const setActiveCategory = (category) => {
    dispatch(updateCategory(category));
    dispatch(updateActiveProducts(category));
  }

  // const { categories, updateCategory, activeCategory } = props;

  // let categoriesToRender = categories.filter(category => category.name !== activeCategory);
  return (
    <ThemeProvider theme={theme} >
      <Box sx={{margin: '30px'}}>
        <Typography variant="h5" >Browse our Categories</Typography>
        <Box sx={{display: 'flex', fontSize: '5rem'}}>
          {
            categories.categories.map((category, index) => (
              <When key={`when-${index}`} condition={category.name !== activeCategory}>
                <Typography 
                  sx={{marginRight: '15px', color: '#0288d1'}} 
                  key={`category-${index}`} 
                  onClick={() => {setActiveCategory(category)}}
                >
                  {category.name.toUpperCase()}
                </Typography>
                <Divider 
                  sx={{marginRight: '15px'}} 
                  orientation="vertical" 
                  key={`divider-${index}`} 
                  flexItem 
                />
              </When>
            ))
          }
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ category }) => { // arguement represents a feild from the store object. Destructure the store object with the property that has the feilds needed for the component, once the store feild is destructure, use dot notation to grab the values from within that object's property
  return {
    categories: category.categories,
    activeCategories: category.activeCategory,
  }
};

export default connect(mapStateToProps)(Categories);