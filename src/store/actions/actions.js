import * as actionTypes from './actionTypes';
import axios from './axios';

export const initData = () => dispatch => {
  axios.get('/games.json')
    .then(response => {
      const fetchedGames = [];
      for (let key in response.data) {
        fetchedGames.push({
          ...response.data[key]
        })
      }
      dispatch({ type: actionTypes.SET_DATA_GAMES, data: fetchedGames })
    }).catch(error => {
      dispatch({ type: actionTypes.ERROR, error: error.response })
    })
};

export const initGenre = () => dispatch => {
  axios.get('/genre.json')
    .then(response => {
      dispatch({ type: actionTypes.SET_GENRE, data: response.data })
    }).catch(error => {
      dispatch({ type: actionTypes.ERROR, error: error.response })
    })
}

export const createData = (data) => dispatch => {
  axios.post('/games.json', data)
    .then(response => {
      dispatch(initData())
    }).catch(error => {
      dispatch({ type: actionTypes.ERROR, error: error.response })
    })
}

export const deleteData = (uuid) => dispatch => {
  axios.delete('/games/' + uuid + '.json')
    .then(response => {
      console.log(response)
      dispatch(initData())
    }).catch(error => {
      dispatch({ type: actionTypes.ERROR, error: error.response })
    })
}

export const editData = (uuid, data) => dispatch => {
  axios.patch('/games/' + uuid + '.json', data)
    .then(response => {
      dispatch(initData())
    }).catch(error => {
      dispatch({ type: actionTypes.ERROR, error: error.response })
    })
}