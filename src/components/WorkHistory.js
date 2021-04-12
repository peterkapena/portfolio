import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const TimeLineComponent = ({ title, when, desc }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h5>{title}</h5>
            <Typography className={classes.pos} variant='overline' color="textSecondary">
                {when}
            </Typography>
            <Typography style={{paddingBottom:'30px'}} variant="body2" component="p">
                {desc}
                <br />
            </Typography>
        </div>
    );
}

export default TimeLineComponent
