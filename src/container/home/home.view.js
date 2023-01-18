import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initGenre, initData } from '../../store/actions/actions';
import PropTypes from 'prop-types';
import Error from '../error/error.view';
import Eru from '../../components/eru/eru';
import Nav from '../../components/navigation/navigation';
import Content from '../../components/content/content';
import Footer from '../../components/footer/footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  LinearProgress,
  Box,
  CssBaseline,
  IconButton,
  useMediaQuery
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Home = () => {
  const { status, error } = useSelector(state => state)
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    dispatch(initData());
    dispatch(initGenre());
  }, [dispatch]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#ce93d8'
          },
          secondary: {
            main: '#ffffff'
          }
        },
      }),
    [mode],
  );

  let dataRender = () => {
    switch (status) {
      case null:
        return <LinearProgress color='secondary' />
      case 200:
        return (
          <ThemeProvider theme={theme}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}>
              <CssBaseline />
              <Nav children={
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'light' ? <LightModeIcon color="secondary" /> : <DarkModeIcon />}
                </IconButton>
              } />
              <Content />
              <Footer children={
                <Eru mode={mode} />
              } />
            </Box>
          </ThemeProvider>
        )
      case status:
        return <Error errorcode={'ERROR [' + status + ']'} info={error} />
      // below code is not working because of above case
      default:
        break;
    }
  }
  return dataRender();
}

Home.propTypes = {
  actions: PropTypes.func,
}

export default Home;
