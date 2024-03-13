import { useEffect } from 'react';
import AOS from 'aos';
import {
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ConstructionIcon from '@mui/icons-material/Construction';
import Cards from '../cards/cards';
import undraw from '../../assets/undraw.svg';

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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
      <CustomizedGrid container sx={{ mb: 4 }} data-aos="fade-up">
        <Grid item sm={6} md={6}>
          <Typography variant="h1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
            <span style={{
              background: 'linear-gradient(to right, #41D1FF, #BD34FE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2em'
            }}>O</span><span style={{ fontSize: '0.5em' }}>pus</span>
            <span style={{
              background: 'linear-gradient(to right, #41D1FF, #BD34FE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '2em'
            }}>L</span><span style={{ fontSize: '0.5em' }}>udos</span>
          </Typography>
          <Typography color="textPrimary" borderLeft={4} sx={{ pl: 1 }}>
            Opus Ludos is your go-to hub for gaming projects. Dive into a world of creativity and collaboration, where developers and gamers unite to explore and share exciting game experiences. Join us and unleash your imagination in the vibrant community of Opus Ludos.
          </Typography>
        </Grid>
      </CustomizedGrid>
      {/* <Grid container spacing={4}>
        <Cards />
      </Grid> */}
      <Box sx={{
        display: 'flex',
        gap: '8px',
      }}>
        <Box variant="outlined" fullWidth sx={{
          height: '325px',
          width: '262.66px',
          borderRadius: '8px',
          border: '1px solid white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ConstructionIcon fontSize="large" />
        </Box>
        <Box variant="outlined" fullWidth sx={{
          height: '325px',
          width: '262.66px',
          borderRadius: '8px',
          border: '1px solid white',
          padding: '8px'
        }}>
          New games are in the works! Stay tuned for updates as we bring you the latest gaming experiences. Adventure awaits!
        </Box>
      </Box>
    </Container>

  );
}

export default Content;
