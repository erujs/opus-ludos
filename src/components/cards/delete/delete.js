import React from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Modal from '../../modal/modal';

const Delete = (props) => {
    return (
        <Modal children={
            <Paper>
                <Typography>Are you sure?</Typography>
                <Button size="small" color="primary" onClick={() => props.onDeleteData(props.uuid)}>
                    Delete
                </Button>
            </Paper>
        } icon={<DeleteOutlineIcon />} />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (uuid) => dispatch(actions.deleteData(uuid))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

