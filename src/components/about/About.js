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
  const aboutme = `I’m a 26-year-old game developer and 3D artist with a passion for crafting immersive worlds and interactive stories. Originally from Iran and now based in Austria, I combine a background in Computer Engineering with a Master’s in Interactive Media to bridge creativity and technology.

From sculpting characters in Blender to building XR experiences in Unreal and Unity, I thrive at the intersection of art and code. I’m fluent in C++, C#, and Python, and bring strong design skills through tools like Photoshop, After Effects, and Premiere. My work spans AR, VR, and MR, always focused on emotion, atmosphere, and engagement.

I love working in diverse teams, sharing ideas, and constantly learning. Whether it’s a game, a character, or an extended reality experience—I create with purpose, empathy, and curiosity.`;

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
