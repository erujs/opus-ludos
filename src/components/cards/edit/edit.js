import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { Grid, 
        TextField, 
        Button, 
        FormControl, 
        Select, 
        InputLabel, 
        MenuItem,
        Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '../../modal/dialog';
import classes from './edit.module.css';

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
        let renderGenre = this.props.genre.map((genre, k) => (
            <MenuItem key={k} value={genre}>{genre}</MenuItem>
            ))
        let renderStatus = ['Active', 'Beta', 'Maintenance', 'Inactive'];
        renderStatus = renderStatus.map((status) => (
            <MenuItem value={status}>{status}</MenuItem>
        ))
        return (
            <Grid xs={12} sm={6} md={4} item>
                <Dialog title={"Edit"} children={
                    <Box className={classes.box}>
                        <TextField
                            id="game_name" label="Game Name" variant="outlined" className={classes.field}
                            value={this.state.game_name}
                            onChange={this.changeHandler.bind(this)} />
                        <TextField
                            id="publisher" label="Publisher" variant="outlined" className={classes.field}
                            value={this.state.publisher}
                            onChange={this.changeHandler.bind(this)} />
                        <FormControl variant="outlined" className={classes.field}>
                            <InputLabel id="genre">Genre</InputLabel>
                            <Select
                                name="genre"
                                value={this.state.genre}
                                onChange={this.selectHandler.bind(this)}
                                label="Genre"
                            >
                                {renderGenre}
                            </Select>
                        </FormControl>
                        <TextField
                            id="version" label="Version" variant="outlined" className={classes.field}
                            value={this.state.version}
                            onChange={this.changeHandler.bind(this)} />
                        <FormControl variant="outlined" className={classes.field}>
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                                name="status"
                                value={this.state.status}
                                onChange={this.selectHandler.bind(this)}
                                label="Status"
                            >
                                {renderStatus}
                            </Select>
                        </FormControl>
                    </Box>
                } icon={<Button className={classes.editButton}><EditIcon /></Button>} 
                modalAction={
                    <Button variant="outlined" className={classes.editModalBtn} 
                        onClick={() => this.props.onEditData(this.props.card.uuid, this.state)}>Edit</Button>
                }/>
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

