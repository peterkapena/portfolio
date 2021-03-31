import React from 'react'
import { useTranslation } from 'react-i18next';
import PrimarySearchAppBar from './NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        paddingTop: theme.spacing(1),
    }
}));

export default function MainPage() {
    const classes = useStyles();

    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>

            <Grid className={classes.grid} justify="center" container spacing={2} alignItems="center" direction="row">
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
            </Grid>
        </div>
    )
}
