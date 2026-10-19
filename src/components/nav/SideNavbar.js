// src/components/nav/SideNavbar.js
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const history = useHistory();
  const location = useLocation();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setActiveNav(targetId);

    // If currently on a project detail page, navigate back to home first
    if (location.pathname !== "/") {
      history.push("/");
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    } else {
      scrollToElement(targetId);
    }
  };

  const scrollToElement = (targetId) => {
    if (targetId === "#" || targetId === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <a
        href="#home"
        onClick={(e) => handleScroll(e, "#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Typography>Home</Typography>
      </a>
      <a
        href="#works"
        onClick={(e) => handleScroll(e, "#works")}
        className={activeNav === "#works" ? "active" : ""}
      >
        <Typography>Projects</Typography>
      </a>
      <a
        href="#education"
        onClick={(e) => handleScroll(e, "#education")}
        className={activeNav === "#education" ? "active" : ""}
      >
        <Typography>Education</Typography>
      </a>
      <a
        href="#workexperience"
        onClick={(e) => handleScroll(e, "#workexperience")}
        className={activeNav === "#workexperience" ? "active" : ""}
      >
        <Typography>Work Experience</Typography>
      </a>
      <a
        href="#about"
        onClick={(e) => handleScroll(e, "#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Typography>About</Typography>
      </a>
      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Typography>Contact</Typography>
      </a>
    </nav>
  );
};