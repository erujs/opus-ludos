import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AppErr from '../../AppErr';
import * as actions from '../../store/actions/index';

class Library extends Component {
    componentDidMount() {
        this.props.onInitData();
    }
    dataRender() {
        console.log(this.props)
        switch(this.props.status){
            case 200:
                return(
                    this.props.games.map(x => {
                        return <p>{x}, </p>
                    })
                )
            case 503:
                return <AppErr errorcode={"[503] Service Unavailable!"} 
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <AppErr errorcode={"[204] No Response!"} 
                    info={"Data cannot find in the server, check URL or contact the administrator"}/>
            default:
                return <p>Loading ...</p>
        }
    }
    render() {
        return this.dataRender();
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        games: state.games
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitData: () => dispatch(actions.initData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
