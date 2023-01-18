import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';

const Footer = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}>
      <Typography variant="body1" align="center">
        "If you're not being challenged, you're not learning"
      </Typography>
      <Typography variant="body1" align="center">
        ~ Christopher R. Perez
      </Typography>
      {props.children}
    </Box>
  )
}

export default Footer;
