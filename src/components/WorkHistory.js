import React from "react";
import { Typography } from "@material-ui/core";

const TimeLineComponent = ({ title, when, desc }) => {
  return (
    <div>
      <h4>{title}</h4>
      <Typography variant="body2">{desc}</Typography>
      <Typography variant="overline" color="textSecondary">
        {when}
      </Typography>
    </div>
  );
};

export default TimeLineComponent;
