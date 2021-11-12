import { ACTION } from './actions';

const defaultState = {
    currentLocation: null,
    forecastData: null
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION.SET_CUREENT_LOCATION:
            return {
                ...state,
                currentLocation: action.payload
            }

        case ACTION.SET_FORECAST_DATA:
            return {
                ...state,
                forecastData: action.payload
            }
        default:
            return state;
    }
}

export default reducer;