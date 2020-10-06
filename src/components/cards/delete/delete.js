import React, { Component } from 'react';
import { Button} from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            description: null
        }
    }

    deleteHandler = () => {
        this.props.onDeleteData(this.props.id)
    }

    render() {
        return (
            <Button size="small" color="primary" onClick={this.deleteHandler}>
                Delete
            </Button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteData: (id) => dispatch(actions.deleteData(id))
    }
}

export default connect(null, mapDispatchToProps)(Delete);

