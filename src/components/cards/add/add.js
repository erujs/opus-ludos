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
import AddIcon from '@material-ui/icons/Add';
import Dialog from '../../modal/dialog';
import classes from './add.module.css';

const initialState = {
    game_name: null,
    publisher: null,
    genre: 1,
    version: null,
    status: 1
};
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.fileInput = React.createRef();
    }
    reset() {
        this.setState(initialState);
    }

    submitHandler = () => {
        this.props.onAddData(this.state);
        this.reset();
    }

    changeHandler = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    selectHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // uploadImage = (event) => {
    //     const formData = new FormData()
    //     formData.append('file', this.fileInput.current.files[0].name)
    //     fetch("https://asia-southeast2-gknb-api.cloudfunctions.net/gknb-storage-function/uploads", {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(
    //         (result) => console.log(result),
    //         (error) => console.log(error)
    //     )
    // }

    // imageHandler = (event) => {
    //     event.preventDefault();
    //     this.uploadImage(event);
    // }

    render() {
        // console.log(this.fileInput.current.files[0])
        return (
            <Grid xs={12} sm={6} md={4} item>
                <Dialog title={"Add a game content"} children={
                    <Box className={classes.box}>
                    {/* <form onSubmit={this.imageHandler.bind(this)}>
                        <label>
                          Upload file:
                          <input name='file' type="file" ref={this.fileInput} encType="multipart/form-data" />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form> */}
                        <TextField
                            id="game_name" label="Game Name" variant="outlined" className={classes.field}
                            onChange={this.changeHandler.bind(this)} />
                        <TextField
                            id="publisher" label="Publisher" variant="outlined" className={classes.field}
                            onChange={this.changeHandler.bind(this)} />
                        <FormControl variant="outlined" className={classes.field}>
                            <InputLabel id="genre">Genre</InputLabel>
                            <Select
                                name="genre"
                                defaultValue={1}
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
                            id="version" label="Version" variant="outlined" className={classes.field}
                            onChange={this.changeHandler.bind(this)} />
                        
                        <FormControl variant="outlined" className={classes.field}>
                            <InputLabel id="status">Status</InputLabel>
                            <Select
                                name="status"
                                defaultValue={1}
                                onChange={this.selectHandler.bind(this)}
                                label="Status"
                            >
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={2}>Beta</MenuItem>
                                <MenuItem value={3}>Under Maintenance</MenuItem>
                                <MenuItem value={4}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                } icon={<Button className={classes.addButton}><AddIcon className={classes.plus} fontSize='large' /></Button>} 
                modalAction={
                    <Button variant="outlined" className={classes.addModalBtn} onClick={() => this.props.onAddData(this.state)}>Add</Button>
                } />
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddData: (data) => dispatch(actions.createData(data)),
        // onUploadImage: (event) => dispatch(actions.uploadImage(event))
    }
}

export default connect(null, mapDispatchToProps)(Add);

