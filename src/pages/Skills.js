import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import data from '../data'
import { useTranslation } from 'react-i18next';
import { Avatar, Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const Skills = () => {
    const { t } = useTranslation();

    const classes = useStyles();
    return (
        <div className={classes.root + ' container_shadow'}>
            <br />
            <br />

            <Grid justify="center" container spacing={2} direction="row" style={{ marginLeft: '10px', marginBottom: '25px' }}>
                <h4>{t('appBar.skillsEx')}</h4>
            </Grid>

            <Grid justify="center" container spacing={2} direction="row">
                {data.expertise.map((e, key) =>
                    <Chip style={{ margin: '5px' }} key={key} label={e} variant="outlined" onClick={() => { }}
                        color={key % 2 === 1 ? "secondary" : "primary"} avatar={<Avatar>{e[0]}</Avatar>} />
                )}
            </Grid>
            <br />

            <Divider></Divider>
            <br />

            <Grid justify="center" container spacing={2} direction="row">
                {data.skills.map((e, key) =>
                    <Chip style={{ margin: '5px' }} key={key} label={e} variant="outlined" onClick={() => { }}
                        color={key % 2 === 1 ? "secondary" : "primary"} avatar={<Avatar>{e[0]}</Avatar>} />
                )}
            </Grid>
            <br />
            <br />
        </div>
    )
}

export default Skills
