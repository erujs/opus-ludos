import {
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled, createTheme } from '@mui/material/styles';

const CustomizedAppBar = styled(AppBar)(
  () => `background-image: linear-gradient(315deg, #BD34FE 0%, #41D1FF 74%);`
);

const Navigation = (props) => {
  const theme = createTheme();
  
  return (
    <CustomizedAppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" color="black" noWrap sx={
          {
            flexGrow: 1,
            marginLeft: `${theme.spacing(1)}`
          }
        }>OL</Typography>
        {props.children}
      </Toolbar>
    </CustomizedAppBar>
  );
};

export default Navigation;
