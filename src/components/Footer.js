import React from 'react'
import data from '../data'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '10px',
        minHeight: '50px',
        padding: '20px 25px',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    designedBy: {
        color: '#0bbbbb'
    },
    languages: {
        width: '30%',
        paddingTop: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    }, languageBtn: {
        fontSize: '0.7325rem'
    }
}));

const Footer = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    const changeLanguage = (l) => {
        i18n.changeLanguage(l)
    }

    return (
        <div className={classes.root + ' container_shadow'}>
            <div className={classes.paper}  >
                <div>
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <h5> ©  {new Date().getFullYear()} - {t('footer.designedBy')} <span className={classes.designedBy}>Peter</span></h5>
                </div>
            </div>
            <br/>
            <hr/>
            <div className={classes.languages}>
                <Button className={classes.languageBtn} size="small" color="primary"
                    onClick={() => { changeLanguage('en'); }}>English</Button>
                <Button className={classes.languageBtn} size="small" color="primary"
                    onClick={() => { changeLanguage('fr'); }}>Français</Button>
            </div>
        </div>

    )
}
export default Footer
