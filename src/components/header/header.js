import React from "react";
import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material';

import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART (0)</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
