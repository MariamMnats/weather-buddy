import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Current = (props) => {
    const { locationInfo } = props;
    const { temp_c, feelslike_c, condition, is_day } = props.data;
    const textColor = is_day ? "text.primary" : "text.light";
    const backgroundColor = (theme) => is_day ? theme.palette.primary.light : theme.palette.primary.dark;
    return <Box sx={{ mb: 2 }}>
        <Card
            sx={{ backgroundColor }}>
            <CardHeader
                titleTypographyProps={{ align: 'center', color: textColor }}
                subheaderTypographyProps={{ align: 'left', color: textColor }}
                title={locationInfo.name}
                color={textColor}
            />
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                        verticalAlign: 'middle'
                    }}
                >
                    <Typography component="h2" variant="h3" color={is_day ? "text.primary" : "text.custom"}>
                        {temp_c}°
                    </Typography>
                    <Typography  >
                        <img alt={condition.text} src={condition.icon} />
                    </Typography>
                </Box>
                <ul>
                    <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        color="secondary.main"
                    >
                        Feels like <b>{feelslike_c}°</b>
                    </Typography>
                    <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        sx={{ color: textColor }}
                    >
                        {condition.text}
                    </Typography>

                </ul>
            </CardContent>
        </Card >
    </Box >;
}

export default Current;