import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Button, Divider, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { THEME_CONSTANTS } from "../redux/theme.js";
import data from "../data";
import { useTranslation } from "react-i18next";
import { ShowNotice } from "./common";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    padding: "0px",
    minHeight: "inherit",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [showBlogNotice, setShowBlogNotice] = useState();

  const history = useHistory();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const { t } = useTranslation();

  const leftSide = [
    <Button
      onClick={() => {
        navTo("/skills");
        setMobileMoreAnchorEl(undefined);
      }}
    >
      {t("appBar.skills")}
    </Button>,
    <Button
      onClick={() => {
        setShowBlogNotice(true);
        setMobileMoreAnchorEl(undefined);
      }}
    >
      BLOG
    </Button>,
  ];

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {leftSide.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </Menu>
  );

  const navTo = (link) => history.push(link);
  const toggleTheme = () => dispatch({ type: THEME_CONSTANTS.TOGGLE_THEME });

  return (
    <div className={classes.grow}>
      <AppBar style={{ padding: "0px", borderRadius: "0px" }} position="static">
        <Toolbar style={{ padding: "0px", borderRadius: "0px" }}>
          <Paper style={{ minHeight: "inherit", borderRadius: "0px" }} square>
            <IconButton
              onClick={() => navTo("/")}
              style={{
                borderRadius: "1px",
                minHeight: "inherit",
                width: "60px",
                borderRadius: "0px",
              }}
            >
              <HomeIcon
                style={{ fontSize: "2.5rem", borderRadius: "0px" }}
              ></HomeIcon>
            </IconButton>
          </Paper>

          <div className={classes.sectionDesktop}>
            {leftSide.map((item, _) => item)}
          </div>
          <div className={classes.grow} />

          {data.socials.map((item, index) => (
            <IconButton
              key={index}
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.icon}
            </IconButton>
          ))}
          <Divider
            orientation="vertical"
            flexItem
            style={{ width: ".5%" }}
          ></Divider>

          <IconButton style={{ marginLeft: "10px" }} onClick={toggleTheme}>
            {theme.theme.palette.type === "dark" ? (
              <Brightness7></Brightness7>
            ) : (
              <Brightness4></Brightness4>
            )}
          </IconButton>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {showBlogNotice && (
        <ShowNotice
          message={t("appBar.showBlogNotice")}
          onOk={() => setShowBlogNotice(false)}
        ></ShowNotice>
      )}
    </div>
  );
}
