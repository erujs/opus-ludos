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
        this.setState({ id: this.props.id }, () => this.props.onDeleteData(this.state))
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
        onDeleteData: (id) => dispatch(actions.deleteData(id))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

