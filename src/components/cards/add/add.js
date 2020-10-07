import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classes from './add.css';
import { Grid, Card, CardContent, CardActions, TextField, Button, Paper} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
                {/* <Paper classes={{
                    root: classes.box
                }} elevation={0}  className={classes.box}>
                    something
                </Paper> */}
                <Card>
                    <CardContent>
                        <TextField
                            gutterBottom variant="h5" component="h2"
                            id="game" label="Game" variant="outlined"
                            onChange={this.changeHandler.bind(this)} />
                        <TextField
                            id="description" label="Description" variant="outlined"
                            onChange={this.changeHandler.bind(this)} />
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.submitHandler}>Add</Button>
                    </CardActions>
                </Card>
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

