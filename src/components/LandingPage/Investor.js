import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    [theme.breakpoints.down("md")]: {
      padding: 20,
    },
  },
  heading: {
    color: theme.palette.pbr.heading || "#333",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  formContainer: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: 20,
    display: "flex",
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
    marginRight: 10,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark || "#c67913",
    },
  },
  closeButton: {
    backgroundColor: "#ddd",
    color: "#000",
    padding: "10px 20px",
    border: "none",
    borderRadius: 8,
    fontSize: 16,
    cursor: "pointer",
    marginTop: 15,
    marginLeft: 10,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#bbb",
    },
  },
  captcha: {
    margin: "20px 0",
    fontSize: 16,
    fontWeight: 600,
  },
}));

Modal.setAppElement("#root"); // Necessário para acessibilidade ao usar React Modal

const Investor = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Gera um captcha simples
  const generateCaptcha = () => {
    const captchaValue = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCaptcha(captchaValue);
  };

  // Verifica e envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha !== generatedCaptcha) {
      alert("Captcha inválido. Tente novamente.");
      generateCaptcha();
      return;
    }

    const templateParams = {
      from_name: "no-reply",
      reply_to: email,
      message,
    };

    emailjs
      .send("service_heozram", "template_wgadw3q", templateParams, "Uh8e_5pCyVmom-LUK")
      .then(
        () => {
          setModalIsOpen(true);
          setEmail("");
          setMessage("");
          setCaptcha("");
          setFormDisabled(true);
          generateCaptcha();

          // Habilita o formulário novamente após 60 segundos
          setTimeout(() => {
            setFormDisabled(false);
          }, 60000);
        },
        () => {
          alert("Falha ao enviar o e-mail. Tente novamente.");
        }
      );
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    if (!formVisible) generateCaptcha();
  };

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Investors and Partners</h6>
      {!formVisible ? (
        <button className={classes.submitButton} onClick={toggleFormVisibility}>
          Become an Investor
        </button>
      ) : (
        <Card className={classes.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
              required
              disabled={formDisabled}
            />
            <textarea
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={classes.input}
              rows="4"
              required
              disabled={formDisabled}
            />
            <div className={classes.captcha}>
              <p>
                Captcha: <strong>{generatedCaptcha}</strong>
              </p>
              <input
                type="text"
                placeholder="Enter the captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className={classes.input}
                required
                disabled={formDisabled}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                type="submit"
                className={classes.submitButton}
                disabled={formDisabled}
              >
                Send Request
              </button>
              <button
                type="button"
                className={classes.closeButton}
                onClick={toggleFormVisibility}
              >
                Close
              </button>
            </div>
          </form>
        </Card>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          },
        }}
      >
        <h2>Success!</h2>
        <p>Your message has been sent successfully.</p>
        <button onClick={closeModal} className={classes.submitButton}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Investor;
