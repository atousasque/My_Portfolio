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
    year: "March 2025 – February 2026",
    role: "Tutor — Working as a teacher's assistant in the fields of: OO programming and Graphics, Games with a Purpose, Intelligent Systems, and Hypermedia Systems and Architecture."
  },
  {
    company: "Hegenberg Embedded System Lab",
    year: "May 2024 – June 2025",
    role: "Python/C# Developer — Working in a team as a Python/C# developer and researcher."
  },
  {
    company: "Unity Developer & 3D Modeler",
    year: "2019 – Present",
    role: "Freelancer Game Developer and Designer — Working in teams or individually as a 3D modeler and Unity developer in game-related projects."
  },
  {
    company: "Cafedeep Company",
    year: "2020 – 2023",
    role: "Artificial Intelligence Expert — Worked as an Artificial Intelligence researcher and content creator."
  },
  {
    company: "Bualisina Incubator Center",
    year: "2017 – 2018",
    role: "Junior Researcher of IoT Laboratory — Worked in teams and researched IoT devices in houses. Was the technical assistant and helped students with technical issues."
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
