import { createMuiTheme } from '@material-ui/core/styles';

export const THEME_CONSTANTS = { TOGGLE_THEME: 'TOGGLE_THEME' }

const theme = (type) => createMuiTheme({
    palette: {
        type: type,
        primary: {
            main: type === 'dark' ? "#4D9CBB" : "#4D9CBB",
            "contrastText": "#fff"
        },
        secondary: {
            main: type === 'dark' ? "#02D6A9" : "#02D6A9",
            "contrastText": "#fff"
        },
        error: {
            main: type === 'dark' ? "#d32f2f" : "#e57373",
            "contrastText": "#fff"
        },
        inherit: {
            main: type === 'dark' ? "rgba(227, 178, 15, 1)" : "rgba(145, 135, 37, 1)",
            "contrastText": "#fff"
        }
    }
})

export const themeReducer = (state = { theme: theme(localStorage.getItem('theme') ?? 'light') }, action) => {
    switch (action.type) {
        case THEME_CONSTANTS.TOGGLE_THEME:
            let s = {
                ...state,
                theme: theme(state.theme.palette.type === 'light' ? 'dark' : 'light')
            }
            localStorage.setItem('theme', s.theme.palette.type)
            return s;
        default:
            return state;
    }
}