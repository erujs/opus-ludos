import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setData = (data) => {
    return{
        type: actionTypes.SET_DATA_GAMES,
        data: data
    }
}

export const serviceFailure = () => {
    return {
        type: actionTypes.SERVICE_DOWN
    };
};

//read
export const initData = () => {
    return dispatch => {
        axios.post('/game/all', {'offset': 0, 'limit': 100})
        .then(response => {
            console.log(response)
            dispatch(setData(response.data))
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    };
};

//create
export const postData = (data) => {
    console.log(data)
    return dispatch => {
        axios.post('/game/add', {game_name: "Something", publisher: "Something", genre: 1, version: "1.0", status: 1})
        .then(response => {
            console.log(response)
            dispatch(initData())
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    }
}

//delete
export const deleteData = (uuid) => {
    return dispatch => {
        axios.delete('/game/add' + uuid)
        .then(response => {
            console.log(response)
            dispatch(initData())
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    }
}