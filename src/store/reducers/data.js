import * as actionTypes from '../actions/actionTypes';

const initialState = {
    status: null,
    games: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA_GAMES:       
            return{
                ...state,
                games: action.data,
                status: 200
            };
        case actionTypes.SERVICE_DOWN:
            return {
                ...state,
                status: 503
            };
        default:
            return state;
    }
};

export default reducer;