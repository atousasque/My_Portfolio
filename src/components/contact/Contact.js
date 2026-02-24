import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Contact.css';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '5rem',
    marginBottom: '5rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Let's get in touch.";

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact-card">
          <Typography variant="h4" className="contact-title">
            <TextDecrypt text={greetings} />
          </Typography>
          <div className="contact-details">
            <Typography className="contact-line">
              📧 <a href="mailto:atousa.garousian@gmail.com">atousa.garousian@gmail.com</a>
            </Typography>
            <Typography className="contact-line">
              🔗 <a href="https://github.com/Atousa98" target="_blank" rel="noreferrer">GitHub</a>
            </Typography>
            <Typography className="contact-line">
              💼 <a href="https://www.linkedin.com/in/atousa-garousian/" target="_blank" rel="noreferrer">LinkedIn</a>
            </Typography>
            <Typography className="contact-line">
              📱 <a href="https://t.me/atousasque" target="_blank" rel="noreferrer">Telegram</a>
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};
