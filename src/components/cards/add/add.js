import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './add.css';
import { Grid, 
        TextField, 
        Button, 
        Paper, 
        FormControl, 
        Select, 
        InputLabel, 
        MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '../../modal/modal';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game_name: null,
            publisher: null,
            genre: null,
            version: null,
            status: null
        }
    }

    submitHandler = () => {
        this.props.onAddData(this.state)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    selectHandler = (event) => {
        console.log(event)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.state)
        return (
            <Grid xs={12} sm={6} md={4} item>
                <div style={{
                    border: '2px solid #7500C0',
                    height: '335px', borderRadius: '4px',
                    display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Modal children={
                        <Paper>
                            <TextField
                                gutterBottom variant="h5" component="h2"
                                id="game_name" label="Game Name" variant="outlined"
                                onChange={this.changeHandler.bind(this)} />
                            <TextField
                                id="publisher" label="Publisher" variant="outlined"
                                onChange={this.changeHandler.bind(this)} />


                            <FormControl variant="outlined" className={classes.formControl}
                                style={{minWidth: '240px'}}>
                                <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    name="genre"
                                    defaultValue={this.state.genre || ''}
                                    onChange={this.selectHandler.bind(this)}
                                    label="Genre"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
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
                                id="version" label="Version" variant="outlined"
                                onChange={this.changeHandler.bind(this)} />
                            
                            <FormControl variant="outlined" className={classes.formControl}
                                style={{minWidth: '240px'}}>
                                <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    name="status"
                                    defaultValue={this.state.status || ''}
                                    onChange={this.selectHandler.bind(this)}
                                    label="Status"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Active</MenuItem>
                                    <MenuItem value={2}>Beta</MenuItem>
                                    <MenuItem value={3}>Under Maintenance</MenuItem>
                                    <MenuItem value={4}>Inactive</MenuItem>
                                </Select>
                            </FormControl>



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

