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
  const aboutme = `I'm Atousa Garousian, an Iranian Creative Technologist & XR Developer based in Upper Austria, completing my M.Sc. in Interactive Media at FH Hagenberg (focus: XR & Human-Computer Interaction) with a B.Sc. in Computer Engineering and a strong background in classical oil/Mixed painting.

I work at the intersection of Mixed Reality, physical computing, and interactive art. My engineering background bridges robust software architectures (C#, C++, Python, Java, JavaScript/TypeScript, React) with real-time immersive systems in Unity and Unreal Engine. My work spans interactive VR/MR environments, sensor-to-cloud IoT ecosystems (ESP32, MQTT), and data-driven pipelines, reflected in projects like VirtuArt (Master's Thesis), Canvas of Confinement, Smart Plants, and ReWild.

I am driven to create interactive experiences that go beyond the screen—tackling real social, environmental, and human questions with technical rigor and critical inquiry.`;

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
