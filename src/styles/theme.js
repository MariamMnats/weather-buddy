import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#e8f5e9',
            main: '#607d8b',
            dark: '#0b344a',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#e8f5e9',
            main: '#007766',
            dark: '#001e19'
        },
        text: {
            primary: '#0b344a',
            secondary: '#0b342af0',
            light: '#44bbaa',
            dark: '#0b342af0',
            custom: '#ffd626f0',

        },
        action: {
            active: '#001E3C',
        },
        success: {
            main: '#009688',
            dark: '#173A5E',
            light: '#e8f5e9'

        }
    },
});