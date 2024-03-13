import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClickOpen}>{props.icon}</Box>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
        <DialogTitle>
          {props.title}
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10 }} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {props.children}
        </DialogContent>
        <DialogActions>
          {props.modalAction}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modal;
