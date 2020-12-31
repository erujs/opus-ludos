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
        axios.get('/games.json')
        .then(response => {
            dispatch(setData(response.data))
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    };
};

//create
export const createData = (data) => {
    console.log(data)
    return dispatch => {
        axios.post('/game/add', data)
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
        axios.delete('/game/' + uuid)
        .then(response => {
            console.log(response)
            dispatch(initData())
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    }
}

//update
export const editData = (uuid, data) => {
    console.log(data)
    return dispatch => {
        axios.patch('/game/' + uuid, data)
        .then(response => {
            console.log(response)
            dispatch(initData())
        }).catch(error => {
            console.log(error)
            dispatch(serviceFailure())
        })
    }
}

//upload image
export const uploadImage = (event) => {
    const formData = new FormData()
    formData.append('file', event.target.files[0])
    fetch("https://asia-southeast2-gknb-api.cloudfunctions.net/gknb-storage-function/uploads", {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(
        (result) => console.log(result),
        (error) => serviceFailure()
    )
}