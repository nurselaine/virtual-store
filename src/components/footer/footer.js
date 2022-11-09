import React from "react";

import {Typography} from '@mui/material';

function Footer() {
  return (
    <footer style={{flexShrink: '0'}}>
      <Typography>&copy; 2022 JavaScript 401</Typography>
      <Typography>React + Redux + Material UI</Typography>
    </footer>
  );
}

export default Footer;