import { Autocomplete, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import weatherApi from '../../api/weatherApi';
import { setCurrentLocation } from '../../store/actions';


const PlacePicker = (props) => {
    const { currentLocation, setCurrentLocation } = props;
    const [search, setSearch] = useState(null);
    const [timer, setTimer] = useState(null);
    const [options, setOptions] = useState([]);

    const setFilteredOptions = useCallback(data => setOptions(data.map(item => ({ value: item.id, label: item.name, ...item }))), []);

    useEffect(() => {
        timer && clearTimeout(timer);
        search && setTimer(setTimeout(() => {
            weatherApi.getPlaces(search, setFilteredOptions);
        }, 300));
    }, [search]);//eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Autocomplete
            sx={{ width: '100%' }}
            disablePortal
            options={options}
            value={currentLocation}
            isOptionEqualToValue={(option, value) => option.label === value}
            renderInput={(params) => {
                return <TextField sx={{
                }} label='Select Location' {...params} />
            }}
            onInputChange={(e, v) => {
                setSearch(v)
            }}
            onChange={(e, v) => {
                setCurrentLocation(v && v.name)
            }}
        />

    );
}

const mapStateToProps = state => ({ currentLocation: state.currentLocation });
const mapDispatchToProps = dispatch => ({ setCurrentLocation: (data) => dispatch(setCurrentLocation(data)) });

export default connect(mapStateToProps, mapDispatchToProps)(PlacePicker)

