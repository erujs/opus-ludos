import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AppErr from '../../AppErr';
import * as actions from '../../store/actions/index';
import Cards from '../../components/cards/cards';

class Library extends Component {
    componentDidMount() {
        this.props.onInitData();
    }
    dataRender() {
        switch(this.props.status){
            case 200:
                return(
                    <Cards />
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
        status: state.status
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitData: () => dispatch(actions.initData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
