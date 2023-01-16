import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BasicTimeline from "../components/Timeline";
import {
  ChevronRightOutlined,
  SchoolOutlined,
  WorkOutlined,
} from "@material-ui/icons";
import TimeLineComponent from "../components/WorkHistory";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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
  const history = useHistory();

  const workTimeLines = [
    {
      sep: {
        clr: "primary",
        icn: <WorkOutlined />,
      },
      cntnt: (
        <h4 style={{ paddingTop: "13px", paddingLeft: "13px" }}>
          {t("profile.workingHist")}
        </h4>
      ),
    },
    {
      sep: {
        clr: "primary",
      },
      cntnt: (
        <TimeLineComponent
          title="Software Developer - Is Kidz Africa"
          when="2020 - Present"
          desc={t("resume.wordkDesc")}
        ></TimeLineComponent>
      ),
    },
  ];

  const educationTimelines = [
    {
      sep: {
        clr: "primary",
        icn: <SchoolOutlined />,
      },
      cntnt: (
        <h4 style={{ paddingTop: "13px", paddingLeft: "13px" }}>
          {t("profile.edHist")}
        </h4>
      ),
    },
    {
      sep: {
        clr: "primary",
      },
      cntnt: (
        <TimeLineComponent
          title="Cape Peninsula University of Technology"
          when="2021 - Present"
          desc="Bachelor of Eng Tech in Computer Engineering"
        ></TimeLineComponent>
      ),
    },
    {
      sep: {
        clr: "primary",
      },
      cntnt: (
        <TimeLineComponent
          title="Cape Peninsula University of Technology"
          when="2017 - 2019"
          desc="National Diploma in Computer Systems"
        ></TimeLineComponent>
      ),
    },
    {
      sep: {
        clr: "primary",
      },
      cntnt: (
        <TimeLineComponent
          title="Cisco CCNA 3"
          when="2018"
          desc="Certificate "
        ></TimeLineComponent>
      ),
    },
  ];
  const classes = useStyles();

  return (
    <div className={classes.root + " container_shadow"}>
      <br />
      <br />

      <Grid justify="center" container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <BasicTimeline timelines={educationTimelines}></BasicTimeline>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <BasicTimeline timelines={workTimeLines}></BasicTimeline>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        endIcon={<ChevronRightOutlined />}
        onClick={() => {
          history.push("/skills");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {t("appBar.skills")}{" "}
      </Button>
    </div>
  );
};

export default Resume;
