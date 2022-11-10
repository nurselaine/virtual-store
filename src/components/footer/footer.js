import React from "react";

import {Typography} from '@mui/material';

function Footer() {
  return (
    <footer style={{flexShrink: '0', textAlign: 'center', margin: '30px'}}>
      <Typography>&copy; 2022 JavaScript 401</Typography>
      <Typography>React + Redux + Material UI</Typography>
    </footer>
  );
}

export default Footer;