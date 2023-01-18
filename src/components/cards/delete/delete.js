import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../../../store/actions/actions';
import Modal from '../../modal/modal';
import {
  Button,
  Typography
} from '@mui/material';

const Delete = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal title={"Delete ?"}
      children={
        <React.Fragment>
          <Typography>Are you sure to delete this game?</Typography>
          <Typography>*Note: you can't undo the action once you click the delete button</Typography>
        </React.Fragment>
      }
      icon={<Button variant="outlined">Delete</Button>}
      modalAction={
        <Button variant="outlined"
          onClick={() => dispatch(deleteData(props.uuid))}>Delete</Button>
      } />
  )
}

export default Delete;
