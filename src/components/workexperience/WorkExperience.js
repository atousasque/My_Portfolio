import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import './WorkExperience.css';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

const workData = [
  {
    company: "FH Upper Austria",
    year: "March 2025 – Present",
    role: "Mentoring students in Mixed Reality frameworks, Object-Oriented Programming, and Games with a Purpose. I guide students through creative technical debugging and help translate complex technological concepts into accessible development frameworks"
  },
  {
    company: "Hagenberg Embedded System Lab",
    year: "May 2024 – June 2025",
    role: "Developed research-oriented code for interactive systems within a transdisciplinary lab environment. Collaborated closely with researchers to bridge technical limitations with innovative, creative software solutions."
  },
  //{
    //company: "Unity Developer & 3D Modeler",
    //year: "2019 – Present",
    //role: "Freelancer Game Developer and Designer — Working in teams or individually as a 3D modeler and Unity developer in game-related projects."
  //},
  {
    company: "Cafedeep Company",
    year: "2020 – 2023",
    role: "Engineered Python-based AI pipelines and tools to facilitate advanced research. Integrated modern media design with intelligent, interactive visual content and motion graphics to process complex datasets."
  },
  {
    company: "Bualisina Incubator Center",
    year: "2017 – 2018",
    role: "Conducted transdisciplinary research on Internet of Things (IoT) devices, exploring the integration of physical sensors and smart environments. Served as a technical assistant, mentoring students on physical computing projects."
  }
];


export const WorkExperience = () => {
  const classes = useStyles();

  return (
    <section id="workexperience">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="workexperience">
          {workData.map((item, idx) => (
            <div className="work-row" key={idx}>
              <div className="work-left">
                <Typography className="work-company">
                  {item.company}
                </Typography>
                <Typography className="work-year">
                  {item.year}
                </Typography>
              </div>
              <div className="work-right">
                <Typography className="work-role">
                  {item.role}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
