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
    company: "Campus Hagenberg – FH Upper Austria",
    year: "March 2025 – Present",
    role: "Student Tutor — Mentoring students across Mixed Reality frameworks, AI, Graphics & Object-Oriented Programming, Databases, WebGL, and Games with a Purpose. Translating complex technical concepts into accessible workflows and guiding creative problem-solving and debugging."
  },
  {
    company: "Embedded Systems Laboratory – Softwarepark",
    year: "May 2024 – June 2025",
    role: "Software Developer & Researcher — Maintained and extended modular Java and C# codebases in an iterative research environment. Engineered the 'Embedded Systems SRAM Data Visualizer & Analyzer' (Python, Tkinter, Pandas, MySQL, Seaborn) to filter raw hardware telemetry, apply statistical analyses, and generate reproducible diagnostic visualizations."
  },
  {
    company: "Mapno Company (Cafedeep | Khabarchain)",
    year: "2020 – 2023",
    role: "Junior Frontend Developer & AI Researcher — Developed and maintained frontend web components and interfaces for an AI-focused web platform. Researched emerging AI methods and authored technical articles translating complex model architectures into accessible documentation."
  },
  {
    company: "BualiSina Incubator Center",
    year: "2017 – 2018",
    role: "Junior Researcher of IoT & Physical Computing — Conducted transdisciplinary research on Internet of Things (IoT) devices, exploring physical sensor integration and smart environments. Served as a technical assistant mentoring students and facilitating physical computing projects."
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