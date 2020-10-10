import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Dialog from '../../modal/dialog';
import classes from './delete.module.css';

const Delete = (props) => {
    return (
        <Dialog title={"Delete ?"} children={
            <React.Fragment>
                <Typography>Are you sure to delete this game?</Typography>
                <Typography>*Note: you can't undo the action once you click the delete button</Typography>
            </React.Fragment>
        } icon={<Button className={classes.deleteButton}><DeleteOutlineIcon /></Button>} 
        modalAction={
            <Button variant="outlined" className={classes.deleteModalBtn}
                onClick={() => props.onDeleteData(props.uuid)}>Delete</Button>
        } />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (uuid) => dispatch(actions.deleteData(uuid))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

