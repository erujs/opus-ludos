import React from 'react';
import Cards from '../cards/cards';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import undraw from '../../assets/undraw.svg';
import { styled } from '@mui/material/styles';

const CustomizedGrid = styled(Grid)(
  () => `
    background-image: url(${undraw});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    height: 25vh;
  `
)

const Content = () => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
      <CustomizedGrid container sx={{ mb: 4 }}>
        <Grid item sm={6} md={6}>
          <Typography variant="h1" color="textPrimary" sx={{ fontWeight: 'bold' }}>Ludos</Typography>
          <Typography color="textPrimary" borderLeft={4} sx={{ pl: 1 }}>
            Ludos is a latin term for 'games'. Ludos is a digital distribution web application for video games.
          </Typography>
        </Grid>
      </CustomizedGrid>
      <Grid container spacing={4}>
        <Cards />
      </Grid>
    </Container>
  );
}

export default Content;
