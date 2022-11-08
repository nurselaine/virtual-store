import { Container, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

import { When } from "react-if";

function CurrentCategory(props) {
  const { activeCategory, categories } = props;
  let categoryDescription;

  if(activeCategory !== ''){
    categoryDescription = categories.filter(category => category.name === activeCategory);
  };

  return (
   <Container
    sx={{
      width: '100w',
      height: '40vh',
      display: 'flex',
      alignItems: 'center',
    }}
   >
    <div style={{margin: 'auto'}}>
      <Typography variant="h1" sx={{textAlign: 'center', margin: 'auto'}} >{activeCategory.toUpperCase()}</Typography>
      {
        activeCategory ? <Typography variant="h5" sx={{textAlign: 'center', color: 'grey'}}>{categoryDescription[0].description}</Typography> : ''
      }
    </div>
   </Container>
  );
}

const mapStateToProps = ({category}) => {
  return {
    categories: category.categories,
    activeCategory: category.activeCategory,
  }
}

export default connect(mapStateToProps)(CurrentCategory);