
import React, { useState, useEffect } from 'react'
import { DialogTitle, Divider, Dialog, DialogContentText, DialogContent, Button, DialogActions } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        color: '#fff',
    },
}));
export const Loader = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <Backdrop className={classes.backdrop} open={open} onClick={() => setOpen(false)}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

const AlertDialog = ({ title, message, onOk, onYes, onNo }) => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(true);
    const [backdropAndEscape, setBackdropAndEscape] = useState(false)

    useEffect(() => {
        setBackdropAndEscape(onOk !== undefined || onYes !== undefined)
    }, [backdropAndEscape, onOk, onYes])

    const handleClose = () => {
        if (onOk)
            onOk()
        setOpen(false);
    };

    function handleNo() {
        onNo()
        setOpen(false)
    }

    function handleYes() {
        onYes()
        setOpen(false)
    }

    return (
        <Dialog disableBackdropClick={backdropAndEscape}
            disableEscapeKeyDown={backdropAndEscape} open={open}
            onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{title ?? 'Please note'}</DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {onYes ? <Button onClick={handleYes} variant='contained' color="primary">{t('popup.yes')}</Button> : <></>}
                {onNo ? <Button onClick={handleNo} variant='outlined' color="primary" autoFocus>{t('popup.no')}</Button> : <></>}
                {onOk ? <Button onClick={handleClose} variant='outlined' color="primary" autoFocus>Ok</Button> : <></>}
            </DialogActions>
        </Dialog>

    )
}

export const ShowNotice = ({ title, message, onOk }) => {
    const { t } = useTranslation();

    function handleOk() {
        if (onOk)
            onOk()
    }
    return (
        <AlertDialog title={title ?? t('popup.tile.showNotice')} message={message} onOk={handleOk}></AlertDialog>
    )
}

export const ShowConfirm = ({ title, message, onYes, onNo }) => {
    const { t } = useTranslation();

    return (<AlertDialog title={title ?? t('popup.tile.showConfirm')} message={message} onYes={onYes} onNo={onNo}></AlertDialog>)
}