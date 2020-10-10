import React, { Component } from 'react';
import { Button, Typography, Paper, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Modal from '../../modal/modal';
import './delete';

class Delete extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Modal children={
                <Paper className="paper">
                    <Typography>Do you want to delete this game?</Typography>
                    <Box className="deleteBox" style={{marginTop: '1rem'}}>
                        <Button variant="outlined" onClick={() => this.props.onDeleteData(this.props.uuid)}>
                            Delete
                        </Button>
                        <Button variant="outlined" onClick={null}>
                            Cancel
                        </Button>
                    </Box>
                </Paper>
            } icon={<Button className="deleteButton"><DeleteOutlineIcon /></Button>} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (uuid) => dispatch(actions.deleteData(uuid))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

