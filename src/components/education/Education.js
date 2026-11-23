import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './Education.css';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '15rem',
    marginBottom: "15rem",
  },
}));

const educationData = [
  {
    name: "FH Upper Austria (Hagenberg)",
    year: "October 2023 – December 2026",
    description: "Master's in Interactive Media. Focus: XR Technologies, Data Visualization, and Human-Computer Interaction. Master's thesis (defense: early December 2026): VirtuArt: Exploring Art Appreciation Through Embodied Difficulty and Physical Friction in Virtual Reality."
  },
  {
    name: "Hamedan University of Technology",
    year: "October 2016 – November 2021",
    description: "Bachelor's in Computer Engineering. Coursework in Algorithms, Artificial Intelligence, and Software Engineering."
  },
  //{
    //name: "SAMPAD High School",
    //year: "2012 – 2016",
    //description: "Mathematics and Physics track with honors. Active in computer Olympiads and Tech Clubs."
  //}
];


export const Education = () => {
  const classes = useStyles();

  return (
    <section id="education">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="education-rows">
          {educationData.map((item, idx) => (
            <div className="education-row" key={idx}>
              <div className="edu-name-box">
                <Typography className="edu-name">
                  {item.name}
                </Typography>
                <Typography className="edu-year">
                  {item.year}
                </Typography>
              </div>
              <div className="edu-desc-box">
                <Typography className="edu-desc">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};