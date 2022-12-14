import React from "react";
import { connect } from "react-redux";
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function Header(props) {
  const theme = useTheme();
  const { cart } = props;

  return (
    <Box>
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h4" component="div" color={theme.palette.primary.dark} sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">
            <Link to='/cart'>
              <Typography>CART ({cart.length})</Typography>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = ({cart}) => ({
  cart: cart.cart,
})

export default connect(mapStateToProps)(Header);
