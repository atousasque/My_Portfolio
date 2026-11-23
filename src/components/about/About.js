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
  const aboutme = `I'm Atousa Garousian, an XR Developer & HCI Researcher based in Vienna / Linz, Austria, completing my M.Sc. in Interactive Media at FH Upper Austria (focus: XR Technologies, Data Visualization, and Human-Computer Interaction) with a B.Sc. in Computer Engineering and a background in mixed-media painting.

I work at the intersection of haptic and embodied interaction, physical computing, and real-time visualization. My engineering background bridges software architectures (C#, C++, Python, Java, JavaScript/TypeScript, React, HLSL) with immersive Unity and Unreal Engine systems, sensor-driven hardware pipelines (ESP32, MQTT), and hardware telemetry analysis—reflected in projects such as VirtuArt (Master's thesis on physical friction in VR), Smart Plants, Linz Historical Portal, Tangible Optical Holograms, and the SRAM Data Visualizer.

I am driven to build interactive systems that extend beyond flat screens—combining tactile materiality, sensing, and empirical user evaluation to explore how physical interaction deepens human understanding.`;

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