import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BasicTimeline from '../components/Timeline';
import { SchoolOutlined, WorkOutlined } from '@material-ui/icons';
import TimeLineComponent from '../components/WorkHistory';
import { useTranslation } from 'react-i18next';

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

const Resume = () => {
    const { t } = useTranslation();

    const workTimeLines = [
        {
            sep: {
                clr: "primary",
                icn: <WorkOutlined />
            },
            cntnt: <h4 style={{ paddingTop: '13px', paddingLeft: '13px' }}>{t('profile.workingHist')}</h4>
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <TimeLineComponent title='Software Developer - Is Kidz Africa' when='2019 - Present'
                desc={t('resume.wordkDesc')}></TimeLineComponent>
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <TimeLineComponent title='Freelancer' when='2020 - Present'
                desc={t('resume.freelancerDesc')}></TimeLineComponent>
        }
    ];

    const educationTimelines = [
        {
            sep: {
                clr: "primary",
                icn: <SchoolOutlined />
            },
            cntnt: <h4 style={{ paddingTop: '13px', paddingLeft: '13px' }}>{t('profile.edHist')}</h4>
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <TimeLineComponent title='Cape Peninsula University of Technology'
                when='2017 - Present' desc='Course: Computer Engineering'></TimeLineComponent>
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <TimeLineComponent title='Cisco CCNA 3' when='2018' desc='Certificate '></TimeLineComponent>
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <TimeLineComponent title='Lycée Madame de Sevigne High School – Computer Systems'
                when='Feb 2009 – 2015' desc={t('profile.highSchool')}></TimeLineComponent>
        }
    ];
    const classes = useStyles();
    return (
        <div className={classes.root + ' container_shadow'}>
            <br />
            <br />

            <Grid justify="center" container spacing={2} direction="row">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <BasicTimeline timelines={workTimeLines} ></BasicTimeline>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <BasicTimeline timelines={educationTimelines} ></BasicTimeline>
                </Grid>
            </Grid>

            <br />
            <br />
        </div>
    )
}

export default Resume
