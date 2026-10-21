// src/components/works/Works.js
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { projects } from "./projectsData";
import "./Works.css";

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div
            className="project"
            key={project.slug || project.id}
            id={`project-${project.slug}`}
          >
            <div
              className="__img_wrapper"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {project.video ? (
                <video controls preload="metadata" src={project.video} />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  style={
                    project.imgStyle || {
                      width: "100%",
                      maxHeight: "450px",
                      objectFit: "contain",
                      margin: "10px auto",
                      display: "block",
                      borderRadius: "8px",
                    }
                  }
                />
              )}
            </div>

            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={`${project.id}. ${project.title}`} />
              </h3>
              <p className="description">{project.description}</p>

              {/* Check for modal data to render link */}
              {project.modal && (
                <Link
                  to={`/project/${project.slug}`}
                  className="show-more-btn"
                  style={{ textDecoration: "none" }}
                >
                  Show more
                </Link>
              )}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};