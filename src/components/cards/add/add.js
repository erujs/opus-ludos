import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './add.css';
import { Grid, TextField, Button, Paper} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../modal/modal';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            description: null
        }
    }

    submitHandler = () => {
        this.props.onAddData(this.state)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <Grid xs={12} sm={6} md={4} item>
                <div style={{border: '2px solid #7500C0', 
                height: '335px', borderRadius: '4px',
                display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Modal children={
                            <Paper>
                                <TextField
                                    gutterBottom variant="h5" component="h2"
                                    id="game" label="Game" variant="outlined"
                                    onChange={this.changeHandler.bind(this)} />
                                <TextField
                                    id="description" label="Description" variant="outlined"
                                    onChange={this.changeHandler.bind(this)} />
                                <Button size="small" color="primary" onClick={this.submitHandler}>Add</Button>
                            </Paper>
                        } icon={<AddIcon />} />
                </div>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddData: (data) => dispatch(actions.postData(data))
    }
}

export default connect(null, mapDispatchToProps)(Add);

