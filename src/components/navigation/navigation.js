import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled, createTheme } from '@mui/material/styles';
import Icon from '../../assets/flaticon.png'

const CustomizedAppBar = styled(AppBar)(
  () => `background-image: linear-gradient(315deg, maroon 0%, #4b0082 74%);`
);

const Navigation = (props) => {
  const theme = createTheme();
  
  return (
    <CustomizedAppBar position="sticky">
      <Toolbar>
        <img src={Icon} alt="" width="42" height="42" sx={{}} />
        <Typography variant="h6" color="white" noWrap sx={
          {
            flexGrow: 1,
            marginLeft: `${theme.spacing(1)}`
          }
        }>Ludos</Typography>
        {props.children}
      </Toolbar>
    </CustomizedAppBar>
  );
};

export default Navigation;
