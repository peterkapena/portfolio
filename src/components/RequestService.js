import React from 'react'
import Button from '@material-ui/core/Button';
import { PlayForWork } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const RequestService = () => {
    const { t } = useTranslation();
    return (
        <Button style={{ marginBottom: '10px', borderRadius: '50px' }} variant="contained" color="secondary"
            endIcon={<PlayForWork color='primary'>send</PlayForWork>}>
            {t('profile.rentMe')}
        </Button>
    )
}

export default RequestService
