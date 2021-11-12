
import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import weatherApi from '../../api/weatherApi'
import { setForecastData } from '../../store/actions';
import Current from './Current';
import Forecast from './Forecast';



function Weather(props) {
    const { currentLocation, forecastData, setForecastData } = props;
    useEffect(() => {
        if (currentLocation) {
            weatherApi.getForecastData(currentLocation, setForecastData);
        }
        else {
            setForecastData(null)
        }
    }, [currentLocation]);//eslint-disable-line react-hooks/exhaustive-deps

    return forecastData ?
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Current data={forecastData.current} locationInfo={forecastData.location} />
                <Forecast forecast={forecastData.forecast} />
            </Container>
            <Container
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 8,
                    py: [3, 6],
                }}
            >
            </Container>
        </React.Fragment > : <></>;
}


const mapStateToProps = state => ({
    forecastData: state.forecastData,
    currentLocation: state.currentLocation
});
const mapDispatchToProps = dispatch => ({ setForecastData: (data) => dispatch(setForecastData(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(Weather);