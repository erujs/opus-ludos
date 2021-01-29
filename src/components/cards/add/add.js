import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {
    Grid,
    TextField,
    Button,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
    Box
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '../../modal/dialog';
import classes from './add.module.css';

const Add = (props) => {
    const [addState, setAddState] = useState({
        game_name: null,
        publisher: null,
        genre: 'FPS',
        version: null,
        status: 'Active',
        uuid: Math.floor((Math.random() * 1000) + 1),
        release_date: Date.now(),
        url: null
    })

    let submitHandler = () => {
        props.onAddData(addState);
    }

    let changeHandler = (event) => {
        console.log(event.target)
        setAddState({ ...addState, [event.target.id]: event.target.value })
    }

    let selectHandler = (event) => {
        setAddState({ ...addState, [event.target.name]: event.target.value })
    }

    let renderGenre = props.genre ? props.genre.map((genre, k) => (
        <MenuItem key={k} value={genre}>{genre}</MenuItem>
    )) : null
    let renderStatus = ['Active', 'Beta', 'Maintenance', 'Inactive'];
    renderStatus = renderStatus.map((status) => (
        <MenuItem value={status}>{status}</MenuItem>
    ))

    return (
        <Grid xs={12} sm={6} md={4} item>
            <Dialog title={"Add a game content"} children={
                <Box className={classes.box}>
                    <TextField
                        id="game_name" label="Game Name" variant="outlined" className={classes.field}
                        onChange={changeHandler.bind(this)} />
                    <TextField
                        id="publisher" label="Publisher" variant="outlined" className={classes.field}
                        onChange={changeHandler.bind(this)} />
                    <FormControl variant="outlined" className={classes.field}>
                        <InputLabel id="genre">Genre</InputLabel>
                        <Select
                            name="genre"
                            value={addState.genre}
                            onChange={selectHandler.bind(this)}
                            label="Genre"
                        >
                            {renderGenre}
                        </Select>
                    </FormControl>
                    <TextField
                        id="version" label="Version" variant="outlined" className={classes.field}
                        onChange={changeHandler.bind(this)} />

                    <FormControl variant="outlined" className={classes.field}>
                        <InputLabel id="status">Status</InputLabel>
                        <Select
                            name="status"
                            value={addState.status}
                            onChange={selectHandler.bind(this)}
                            label="Status"
                        >
                            {renderStatus}
                        </Select>
                    </FormControl>
                    <TextField
                        id="url" label="Link" variant="outlined" className={classes.field}
                        onChange={changeHandler.bind(this)} />
                </Box>
            } icon={<Button className={classes.addButton}><AddIcon className={classes.plus} fontSize='large' /></Button>}
                modalAction={
                    <Button variant="outlined" className={classes.addModalBtn} onClick={() => submitHandler()}>Add</Button>
                } />
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        genre: state.genre
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddData: (data) => dispatch(actions.createData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);

