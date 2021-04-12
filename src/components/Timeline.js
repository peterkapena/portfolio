import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Timeline.css'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const BasicTimeline = ({ timelines, style }) => {
    return (
        <Timeline style={style}>
            {timelines.map((timeline, index) => {
                let TimelineDotStyle = index === 0 ? {
                    marginTop: '0px', marginBottom: '0px'
                } : { margin: '12px', marginTop: '0px', marginBottom: '0px' }

                let TimelineItemStyle = index === 0 ? {

                } : { minHeight: '40px' }

                return <TimelineItem key={index} style={TimelineItemStyle}>
                    <TimelineOppositeContent style={{ display: 'none' }}> </TimelineOppositeContent>
                    <TimelineSeparator >
                        <TimelineDot style={TimelineDotStyle} color={timeline.sep.clr}>
                            {timeline.sep.icn}
                        </TimelineDot>
                        {
                            timelines.length - 1 !== index &&
                            <TimelineConnector />
                        }
                    </TimelineSeparator>
                    <TimelineContent style={{ padding: '0px', marginTop: '-6px', marginBottom: '0px' }}>
                        {timeline.cntnt}
                    </TimelineContent>
                </TimelineItem>
            }
            )}
        </Timeline >
    );
}

export default BasicTimeline
