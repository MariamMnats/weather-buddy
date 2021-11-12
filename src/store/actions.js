export const ACTION = {
    SET_CUREENT_LOCATION: 'SET_CUREENT_LOCATION',
    SET_FORECAST_DATA: 'SET_FORECAST_DATA',
}

export const setCurrentLocation = (payload) => ({
    type: ACTION.SET_CUREENT_LOCATION,
    payload
});

export const setForecastData = (payload) => ({
    type: ACTION.SET_FORECAST_DATA,
    payload
});