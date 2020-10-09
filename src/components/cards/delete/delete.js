import React from 'react';
import { Button, Typography, Paper, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Modal from '../../modal/modal';
import './delete';

const Delete = (props) => {
    return (
        <Modal children={
            <Paper className="paper">
                <Typography>Do you want to delete this game?</Typography>
                <Box className="deleteBox" style={{marginTop: '1rem'}}>
                    <Button variant="outlined" className="delete-button" onClick={() => props.onDeleteData(props.uuid)}>
                        Delete
                    </Button>
                    <Button variant="outlined" className="delete-button" onClick={null}>
                        Cancel
                    </Button>
                </Box>
            </Paper>
        } icon={<Button variant="outlined"><DeleteOutlineIcon fontSize='large' /></Button>} />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (uuid) => dispatch(actions.deleteData(uuid))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

