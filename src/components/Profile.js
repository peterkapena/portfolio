import React from 'react'
import './Profile.css'
import displaypic from '../assets/peter.jpg'
import BasicTimeline from './Timeline'
import { LaptopMacOutlined } from '@material-ui/icons';
import data from '../data'
import RequestService from './RequestService';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t } = useTranslation();

    const timelines = [
        {
            sep: {
                clr: "primary",
                icn: <LaptopMacOutlined />
            }
        },
        {
            sep: {
                clr: "primary",
            },
            cntnt: <><b>Email</b><span> {data.email}</span></>
        }      
    ];

    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <span className='name'>{data.name}</span>
                <br />
                <span className='title'>{t('profile.title')}</span>
            </div>
            <figure className='profile_image'>
                <img src={displaypic} alt=''></img>
            </figure>
            <BasicTimeline style={{ padding: '0px', margin: '-28px 7px 10px' }} timelines={timelines} ></BasicTimeline>

            <div className='profile_RequestService_btn'>
                <RequestService></RequestService>
            </div>
        </div>
    )
}

export default Profile
