import { createTheme, PaletteMode } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#ff5252',
        },
    },
});

export const theme = (mode: PaletteMode | undefined) => mode === "dark" ? darkTheme : lightTheme;
