import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ModalContent from '../modal/modal-content';
import Modal from '../modal/modal';
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
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
              <Box sx={{
                position: 'absolute',
                top: 40,
                right: 10,
              }}>
                <Modal
                  icon={
                    <Fab size="small" aria-label="info">
                      <MoreHorizIcon />
                    </Fab>
                  }
                  title={card.name}
                  children={
                    <>
                      <Typography>Version {card.version}</Typography>
                      <Typography>Published by {card.publisher}</Typography>
                      <Typography>Released {moment(card.release_date).format('MMMM Do YYYY')}</Typography>
                      <Typography>{card.genre} genre</Typography>
                    </>
                  }
                />
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
                    modalAction={'Edit'}
                  />
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
