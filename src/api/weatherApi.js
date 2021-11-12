
const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
    params: { key: '69b9757987b5458d962165951211011' }
});

const weatherApi = {
    getForecastData(q, callback) {
        instance.get('https://api.weatherapi.com/v1/forecast.json', {
            params: { q, days: 10 }
        }).then(response => callback(response.data));
    },

    getPlaces(q, callback) {
        instance.get('https://api.weatherapi.com/v1/search.json', {
            params: { q }
        }).then(response => callback(response.data));
    }
};

export default weatherApi;