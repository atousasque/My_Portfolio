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
  const aboutme = `I am a Creative Technologist and Digital Artist bridging the gap between physical materiality and virtual environments. Originally from Iran and now based in Austria, my journey is deeply rooted in exploring the intersection of human senses, critical data, and interactive art to rethink digital experiences. 

With a Bachelor’s in Computer Engineering and a Master’s in Interactive Media, I combine a robust technical foundation in creative coding with a passion for traditional fine arts and analog media. My expertise spans across designing sensory-rich Mixed Reality (XR) ecosystems, virtual reality installations, and procedural 3D workflows using tools like Unity, Unreal Engine, Blender, and Houdini. Proficient in C++, C#, and Python, I am dedicated to deconstructing emerging technologies to tell powerful, unfiltered stories.

Driven by empathy and a commitment to sustainability, my artistic research focuses on giving a voice to marginalized and unseen communities through heavy atmospheres and emotional depth. Whether engineering gameplay loops for international festivals or translating the tactile resistance of physical canvas into VR, I create with purpose, critical curiosity, and a transdisciplinary vision.`;

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
