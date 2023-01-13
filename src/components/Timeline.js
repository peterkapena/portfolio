import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import "./Timeline.css";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

const BasicTimeline = ({ timelines, style }) => {
  return (
    <Timeline style={style}>
      {timelines.map((timeline, index) => {
        const TimelineDotStyle =
          index === 0
            ? {
                marginTop: "0px",
                marginBottom: "0px",
              }
            : { margin: "12px", marginTop: "0px", marginBottom: "0px" };
        let TimelineContentStyle = {
          padding: "0px",
          marginTop: "-6px",
          marginBottom: "15px",
        };

        if (index === 0)
          TimelineContentStyle = {
            ...TimelineContentStyle,
            marginBottom: "0px",
          };

        return (
          <TimelineItem key={index} style={{ minHeight: "50px" }}>
            <TimelineOppositeContent style={{ display: "none" }}>
              {" "}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={TimelineDotStyle} color={timeline.sep.clr}>
                {timeline.sep.icn}
              </TimelineDot>
              {timelines.length - 1 !== index && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent style={TimelineContentStyle}>
              {timeline.cntnt}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default BasicTimeline;
