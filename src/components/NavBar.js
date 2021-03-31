import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap>Welcome @ Peter</Typography>
                    <div className={classes.grow} />
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <MailIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
