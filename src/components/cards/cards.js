import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ModalContent from '../modal/modal-content';
import Delete from './delete/delete';
import {
  Grid,
  Card,
  Link,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Fab,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const CustomizedTypography = styled(Typography)(
  () => `
    color: white;
    text-shadow: 2px 2px 5px rgba(0,0,0,0.8), 0px 0px 2px  rgba(0,0,0,1);
  `
)

const Cards = () => {
  AOS.init();
  const { games, auth } = useSelector(state => state);

  const renderComponent = () => {
    if (games) {
      return games.map((card) => (
        <Grid item key={card.uuid} xs={12} sm={6} md={4} data-aos="fade-up">
          <Card fullWidth sx={{ height: '325px' }}>
            <Link href={card.url} target="_blank">
              <CardMedia component='img' height='325' image={card.image} />
            </Link>
            <CardContent>
              <Box sx={{ position: 'absolute', top: 40 }}>
                <CustomizedTypography>{card.name} v{card.version}</CustomizedTypography>
                <CustomizedTypography>by {card.publisher}</CustomizedTypography>
                <CustomizedTypography>{moment(card.release_date).format('MMMM Do YYYY')}</CustomizedTypography>
                <CustomizedTypography>{card.genre}</CustomizedTypography>
              </Box>
              {
                auth === 'admin'
                  ? <ModalContent
                    title={"Modify"}
                    card={card}
                    uuid={card.uuid}
                    delete={<Delete />}
                    icon={
                      <Fab size="small" sx={{ position: 'absolute', bottom: 10, right: 10 }} aria-label="edit">
                        <EditIcon />
                      </Fab>
                    }
                    modalAction={'Edit'} />
                  : null
              }
            </CardContent>
          </Card>
        </Grid>
      ))
    }
    return null;
  }
  return (
    <>
      {
        auth === 'admin'
          ? <ModalContent
            title={"Add"}
            icon={
              <Button variant="outlined" fullWidth sx={{ height: '325px' }}>
                <AddIcon fontSize='large' />
              </Button>
            }
            modalAction={'Add'} />
          : null
      }
      {renderComponent()}
      <div data-aos="fade-up" />
    </>
  );
}

export default Cards;
