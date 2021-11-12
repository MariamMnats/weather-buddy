import { Grid } from "@mui/material";
import DayItem from "./DayItem";

const Forecast = (props) => {
    const { forecast } = props
    return <Grid container spacing={5} alignItems="flex-end">
        {forecast.forecastday.map((item) => <DayItem key={item.date} data={item} />)}
    </Grid>;
}

export default Forecast;