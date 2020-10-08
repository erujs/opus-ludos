import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { TextField, Button, Paper} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '../../modal/modal';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            description: null
        }
    }

    submitHandler = () => {
        // this.props.onAddData(this.state)
        console.log('working')
    }

    changeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <Modal children={
                <Paper>
                    {/* <TextField
                        gutterBottom variant="h5" component="h2"
                        id="game" label="Game" variant="outlined"
                        onChange={this.changeHandler.bind(this)} />
                    <TextField
                        id="description" label="Description" variant="outlined"
                        onChange={this.changeHandler.bind(this)} /> */}
                    <Button size="small" color="primary" onClick={this.submitHandler}>Edit</Button>
                </Paper>
            } icon={<EditIcon />} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddData: (data) => dispatch(actions.postData(data))
    }
}

export default connect(null, mapDispatchToProps)(Edit);

