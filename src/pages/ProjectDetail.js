// src/pages/ProjectDetail.js
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "../components/works/projectsData";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    padding: "4rem 1.5rem",
    position: "relative",
    zIndex: 1, // Keep content above 3D background
  },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    color: "#ec704c",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    marginBottom: "2rem",
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "translateX(-4px)",
    },
  },
  card: {
    backgroundColor: "rgba(30, 30, 30, 0.85)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    padding: "2.5rem",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
    lineHeight: "1.7",
    color: "#fff",
    "& p": {
      fontSize: "1.05rem",
      marginBottom: "1rem",
      color: "#e0e0e0",
    },
    "& ul": {
      paddingLeft: "1.5rem",
      marginBottom: "1.5rem",
    },
    "& li": {
      marginBottom: "0.6rem",
      color: "#d0d0d0",
    },
  },
  mediaWrapper: {
    marginBottom: "2rem",
    borderRadius: "12px",
    overflow: "hidden",
    textAlign: "center",
  },
  mainMedia: {
    width: "100%",
    maxHeight: "550px",
    objectFit: "contain",
    borderRadius: "12px",
  },
  modalImage: {
    width: "100%",
    maxHeight: "550px",
    objectFit: "contain",
    borderRadius: "10px",
    margin: "1rem 0 2rem 0",
    display: "block",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#fff",
  },
}));

export const ProjectDetail = () => {
  const classes = useStyles();
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <Container maxWidth="md" className={classes.root}>
        <Link to="/" className={classes.backLink}>
          ← Back to Portfolio
        </Link>
        <Typography variant="h4" style={{ color: "#fff" }}>
          Project not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Link to="/" className={classes.backLink}>
        ← Back to Projects
      </Link>

      <div className={classes.card}>
        <h1 className={classes.title}>{project.title}</h1>

        {/* Display video ONLY if explicitly enabled for this project */}
        {project.showVideoInDetail && project.video && (
          <div className={classes.mediaWrapper}>
            <video controls src={project.video} className={classes.mainMedia} />
          </div>
        )}

        {/* Display image if defined for modal */}
        {project.modal && project.modal.image && (
          <img
            src={project.modal.image}
            alt={project.title}
            className={classes.modalImage}
          />
        )}

        {/* Modal Description Content */}
        {project.modal && project.modal.content}

        {/* Modal Text if available */}
        {project.modal && project.modal.text && (
          <Typography variant="body1">{project.modal.text}</Typography>
        )}
      </div>
    </Container>
  );
};