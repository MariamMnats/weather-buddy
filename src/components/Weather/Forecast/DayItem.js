import { Card, CardContent, CardHeader, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const DayItem = (props) => {
    const { data } = props
    const { day, date } = data;
    const { maxtemp_c, mintemp_c, avgtemp_c, condition } = day;
    return <Grid
        item
        xs={12}
        sm={12}
        md={4}
    >
        <Card>
            <CardHeader
                subheader={date}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center', color: "text.main" }}
                sx={{ backgroundColor: (theme) => theme.palette.secondary.light }}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                        verticalAlign: 'middle'
                    }} >
                    <Typography component="h2" variant="h3" color="text.primary">
                        {avgtemp_c}°
                    </Typography>
                    <Typography  >
                        <img component="image" alt={condition.text} src={condition.icon} />
                    </Typography>
                </Box>
                <ul>
                    <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                    >
                        <Chip color="primary" label={<><b>{mintemp_c}°</b>-<b>{maxtemp_c}°</b></>} />
                    </Typography>
                    <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                    >
                        {condition.text}
                    </Typography>

                </ul>
            </CardContent>
        </Card>
    </Grid>;
}

export default DayItem;