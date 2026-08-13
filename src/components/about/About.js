/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `I am a Software Engineer and Interactive Systems Developer based in Austria, with a Bachelor's in Computer Engineering and an M.Sc. in Interactive Media from FH Hagenberg. I bridge the gap between robust software architecture and immersive digital experiences—specializing in JavaScript/TypeScript, React, Java, C#, and C++.

My work spans two complementary worlds: engineering web-based tools, RESTful APIs, and component-based architectures, alongside developing interactive XR (VR/MR) installations, 3D real-time simulations, and game systems (using Unity and Unreal Engine). Projects like ReWild (Ars Electronica), VirtuArt (Master's Thesis), and LongDrive reflect my passion for interactive logic, complex state management, and real-time performance optimization.

Driven by clean code, Object-Oriented Design, and continuous learning, I thrive in collaborative, agile environments. Whether building enterprise web interfaces or experimenting with 3D graphics and physical interaction, I create with technical rigor and creative curiosity.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
