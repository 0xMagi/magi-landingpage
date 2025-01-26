import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";

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
    backgroundColor: theme.palette.primary.main,
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
  logoContainer: {
    borderRadius: 14,
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    justifyContent: "center",
  },
  logoWrapper: {
    maxWidth: 900,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  imageWrapper: {
    padding: 10,
    height: "45px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 15,
    },
  },
}));

const Investor = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado por seu interesse! Entraremos em contato pelo e-mail: ${email}`);
    setEmail("");
  };

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Investors and Partners<strong className={classes.highlight}></strong>
      </h6>

      <div className={classes.logoContainer}>
        <div className={classes.logoWrapper}>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://polkabridge.org/">
                  <img
                    src="https://launchpad.polkabridge.org/img/logo-white.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="http://chinapolka.com/">
                  <img
                    src="assets/chinapolka.png"
                    alt="logo"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4" align="center">
              <div>
                <a className={classes.listItem} href="https://arcadenet.io/">
                  <img
                    src="assets/arcade.png"
                    alt="arcade"
                    className={classes.imageWrapper}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.formContainer}>
        <h2>Seja um Investidor</h2>
        <p className={classes.para}>
          Preencha o formulário abaixo para enviar sua solicitação de contato.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.input}
            required
          />
          <button type="submit" className={classes.submitButton}>
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  );
};

export default Investor;
