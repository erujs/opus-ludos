import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { createData, editData } from '../../store/actions/actions';
import Modal from './modal';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';

const ModalContent = (props) => {
  const initialState = {
    name: null,
    publisher: null,
    genre: 'FPS',
    version: null,
    status: 'Active',
    uuid: Math.floor((Math.random() * 1000) + 1),
    release_date: moment(Date.now()).format('MMMM Do YYYY'),
    url: null,
    image: 'https://source.unsplash.com/random',
  }
  const { card } = props;
  const [cardState, setCardData] = useState(
    card
      ? {
        name: card.name,
        publisher: card.publisher,
        genre: card.genre,
        version: card.version,
        status: card.status,
        uuid: card.uuid,
        release_date: Date.now(),
        url: card.url,
        image: card.image,
      }
      : initialState)
  const { genre } = useSelector(state => state);
  const dispatch = useDispatch();

  const reset = () => setCardData(initialState);

  const changeHandler = (event) => {
    setCardData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  const selectHandler = (event) => {
    setCardData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const submitHandler = () => {
    if (props.modalAction === 'Edit') {
      dispatch(editData(card.uuid, cardState));
      reset();
    } else {
      dispatch(createData(cardState));
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Modal title={props.title}
        children={
          <>
            <TextField
              margin="dense"
              fullWidth
              id="name"
              label="Game Name"
              variant="outlined"
              value={cardState.name}
              onChange={changeHandler.bind(this)} />
            <TextField
              margin="dense"
              fullWidth
              id="publisher"
              label="Publisher"
              variant="outlined"
              value={cardState.publisher}
              onChange={changeHandler.bind(this)} />
            <TextField
              margin="dense"
              fullWidth
              id='genre'
              select
              value={cardState.genre}
              onChange={selectHandler.bind(this)}
              label="Genre">
              {genre ? genre.map((genre) => (
                <MenuItem key={genre} value={genre}>{genre}</MenuItem>
              )) : null}
            </TextField>
            <TextField
              margin="dense"
              fullWidth
              id="version"
              label="Version"
              variant="outlined"
              value={cardState.version}
              onChange={changeHandler.bind(this)} />
            <TextField
              margin="dense"
              fullWidth
              id="url"
              label="Link"
              variant="outlined"
              value={cardState.url}
              onChange={changeHandler.bind(this)} />
            <TextField
              margin="dense"
              fullWidth
              id="image"
              label="Image Link"
              variant="outlined"
              value={cardState.image}
              onChange={changeHandler.bind(this)} />
          </>
        }
        icon={props.icon}
        modalAction={
          <>
            {props.delete ? props.delete : null}
            <Button variant="outlined" onClick={() => submitHandler()}>{props.modalAction}</Button>
          </>
        } />
    </Grid>
  )
}

export default ModalContent;
