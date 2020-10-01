import * as actionTypes from './actionTypes';
import $ from 'jquery';

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

export const initData = () => {
    return dispatch => {
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://asia-east2-project-gae-290607.cloudfunctions.net/api/games',
            type: 'GET',
            cache: false,
            success: response => {
                dispatch(setData(response));
            },
            error: error => {
                console.log(error)
                dispatch(serviceFailure());
            }
        })
    };
};