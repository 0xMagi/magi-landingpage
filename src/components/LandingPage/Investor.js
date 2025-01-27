import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 80,
    paddingBottom: 80,

    [theme.breakpoints.down("md")]: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 50,
    marginBottom: 40,

    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    fontWeight: 600,
    fontSize: 18,
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    paddingBottom: 15,
    textAlign: "center",
  },
  formContainer: {
    marginTop: 30,
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: 20,
    display: "none",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: "10px 15px",
    margin: "10px 0",
    borderRadius: 8,
    border: "1px solid #ddd",
    fontSize: 16,
  },
  submitButton: {
    background: "linear-gradient(to right, #fbb519, #c68913)",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    cursor: "pointer",
    marginTop: 15,
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  toggleButton: {
    background: "linear-gradient(to right, #fbb519, #c68913)",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    cursor: "pointer",
    marginTop: 15,
    transition: "background-color 0.3s ease",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  visible: {
    display: "flex",
  },
}));

const Investor = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar o e-mail usando o EmailJS
    const templateParams = {
      from_email: email,
      message: message,
      to_email: 'contact@magi.best',
    };

    emailjs.send('service_57z04uq', 'template_wgadw3q', templateParams, 'Uh8e_5pCyVmom-LUK')
      .then((response) => {
        alert('Seu pedido foi enviado com sucesso!');
        setEmail("");
        setMessage("");
      }, (error) => {
        alert('Falha ao enviar o e-mail. Tente novamente.');
      });
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Investors and Partners<strong className={classes.highlight}></strong>
      </h6>

      <button className={classes.toggleButton} onClick={toggleFormVisibility}>
        {formVisible ? "Close Form" : "Become an Investor"}
      </button>

      <div className={`${classes.formContainer} ${formVisible ? classes.visible : ""}`}>
        <p className={classes.para}>
          Fill out the form below to send your request.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            required
          />
          <textarea
            placeholder="Write your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.input}
            rows="4"
            required
          />
          <button type="submit" className={classes.submitButton}>
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Investor;
