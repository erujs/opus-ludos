import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Grid, 
        TextField, 
        Button, 
        Paper, 
        FormControl, 
        Select, 
        InputLabel, 
        MenuItem,
        Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '../../modal/modal';
import './edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        let data = this.props.card;
        const initialState = {
            game_name: data.game_name,
            publisher: data.publisher,
            genre: data.genre,
            version: data.version,
            status: data.status
        }
        this.state = initialState
    }
    reset() {
        this.setState(this.initialState);
    }

    submitHandler = () => {
        this.props.onEditData(this.state);
        this.reset();
    }

    changeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    selectHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <Grid xs={12} sm={6} md={4} item>
                <Modal children={
                    <Paper className="paper">
                        <TextField
                            id="game_name" label="Game Name" variant="outlined" className="field"
                            value={this.state.game_name}
                            onChange={this.changeHandler.bind(this)} />
                        <TextField
                            id="publisher" label="Publisher" variant="outlined" className="field"
                            value={this.state.publisher}
                            onChange={this.changeHandler.bind(this)} />
                        <FormControl variant="outlined" className="field">
                            <InputLabel id="genre">Genre</InputLabel>
                            <Select
                                name="genre"
                                value={this.state.genre}
                                onChange={this.selectHandler.bind(this)}
                                label="Genre"
                            >
                                <MenuItem value={1}>Action</MenuItem>
                                <MenuItem value={2}>Adventure</MenuItem>
                                <MenuItem value={3}>MMORPG</MenuItem>
                                <MenuItem value={4}>RPG</MenuItem>
                                <MenuItem value={5}>Simulation</MenuItem>
                                <MenuItem value={6}>Strategy</MenuItem>
                                <MenuItem value={7}>Sports</MenuItem>
                                <MenuItem value={8}>MMO</MenuItem>
                                <MenuItem value={9}>Party</MenuItem>
                                <MenuItem value={10}>Programming</MenuItem>
                                <MenuItem value={11}>Trivia</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="version" label="Version" variant="outlined" className="field"
                            value={this.state.version}
                            onChange={this.changeHandler.bind(this)} />
                        <FormControl variant="outlined" className="field">
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                                name="status"
                                value={this.state.status}
                                onChange={this.selectHandler.bind(this)}
                                label="Status"
                            >
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={2}>Beta</MenuItem>
                                <MenuItem value={3}>Under Maintenance</MenuItem>
                                <MenuItem value={4}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <Box className="box">
                            <Button variant="outlined" className="modal-btn" 
                                onClick={() => this.props.onEditData(this.props.card.uuid, this.state)}>Edit</Button>
                            <Button variant="outlined" className="modal-btn">Cancel</Button>
                        </Box>
                    </Paper>
                } icon={<Button variant="outlined"><EditIcon fontSize='large' /></Button>} />
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditData: (id, data) => dispatch(actions.editData(id, data))
    }
}

export default connect(null, mapDispatchToProps)(Edit);

