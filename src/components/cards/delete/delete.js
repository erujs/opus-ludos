import React, { Component } from 'react';
import { Button, Typography, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Modal from '../../modal/modal';

class Delete extends Component {
    constructor(props) {
        super(props);
    }

    deleteHandler = () => {
        this.props.onDeleteData(this.props.uuid);
    }

    render() {
        return (
            <Modal children={
                <Paper>
                    <Typography>Are you sure?</Typography>
                    <Button size="small" color="primary" onClick={this.deleteHandler}>Delete</Button>
                </Paper>
            } icon={<DeleteOutlineIcon />} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (uuid) => dispatch(actions.deleteData(uuid))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

