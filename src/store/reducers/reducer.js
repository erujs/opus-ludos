import * as actionTypes from '../actions/actionTypes';

const initialState = {
  status: null,
  games: null,
  genre: null,
  auth: 'admin',
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA_GAMES:
      return {
        ...state,
        games: action.data,
        status: 200
      };
    case actionTypes.SET_GENRE:
      return {
        ...state,
        genre: action.data,
        status: 200
      }
    case actionTypes.ERROR:
      const { status, statusText } = action.error
      return {
        ...state,
        status: status,
        error: statusText,
      };
    default:
      return state;
  }
};

export default reducer;
