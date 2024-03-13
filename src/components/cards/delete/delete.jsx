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
      icon={<Button variant="outlined">Delete</Button>}
      modalAction={
        <Button variant="outlined"
          onClick={() => dispatch(deleteData(props.uuid))}>Delete</Button>
      }>
        <Typography>Are you sure to delete this game?</Typography>
        <Typography>*Note: you can&apos;t undo the action once you click the delete button</Typography>
    </Modal>
  )
}

export default Delete;
