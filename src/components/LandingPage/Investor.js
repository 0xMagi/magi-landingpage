import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importando os logotipos
import melandLogo from "./assets/meland.png";
import dogecoinLogo from "./assets/dogecoin.png";

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
  sliderContainer: {
    width: "100%",
    maxWidth: 600,
    marginBottom: 30,
  },
  logo: {
    width: "100%",
    maxWidth: 120,
    height: "auto",
    cursor: "pointer",
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
      backgroundColor: theme.palette.primary.dark || "#c67913",
    },
  },
}));

Modal.setAppElement("#root");

const Investor = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const generateCaptcha = () => {
    const captchaValue = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCaptcha(captchaValue);
  };

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
      .then(() => {
        setModalIsOpen(true);
        setEmail("");
        setMessage("");
        setCaptcha("");
        setFormDisabled(true);
        generateCaptcha();

        setTimeout(() => {
          setFormDisabled(false);
        }, 60000);
      })
      .catch(() => {
        alert("Falha ao enviar o e-mail. Tente novamente.");
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    if (!formVisible) generateCaptcha();
  };

  const investors = [
    { logo: melandLogo, link: "https://meland.ai" },
    { logo: dogecoinLogo, link: "https://dogecoin.com" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Investors and Partners</h6>

      <div className={classes.sliderContainer}>
        <Slider {...sliderSettings}>
          {investors.map((investor, index) => (
            <div key={index} onClick={() => window.open(investor.link, "_blank")}>
              <img src={investor.logo} alt={`Investor ${index + 1}`} className={classes.logo} />
            </div>
          ))}
        </Slider>
      </div>

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
              required
              disabled={formDisabled}
            />
            <textarea
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
              disabled={formDisabled}
            />
            <div>
              <p>
                Captcha: <strong>{generatedCaptcha}</strong>
              </p>
              <input
                type="text"
                placeholder="Enter the captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                required
                disabled={formDisabled}
              />
            </div>
            <div>
              <button type="submit" className={classes.submitButton} disabled={formDisabled}>
                Send Request
              </button>
              <button type="button" className={classes.submitButton} onClick={toggleFormVisibility}>
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
