import React from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 50px",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    [theme.breakpoints.down("md")]: {
      padding: "20px 10px",
    },
  },
  heading: {
    color: "#333",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  formContainer: {
    maxWidth: 500,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: 12,
  },
  textField: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    fontWeight: 600,
    '&:hover': {
      backgroundColor: "#0056b3",
    },
  },
  footerText: {
    marginTop: 20,
    color: "#666",
    textAlign: "center",
    fontSize: 14,
  },
}));

const Investor = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Email:", email);
    console.log("Message:", message);
    alert("Thank you for your interest! We'll be in touch.");
  };

  return (
    <div className={classes.background}>
      <Typography className={classes.heading} variant="h4">
        Become an Investor
      </Typography>
      <Card className={classes.formContainer}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.textField}
              fullWidth
              required
              label="Your Email Address"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              fullWidth
              required
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button
              className={classes.button}
              fullWidth
              type="submit"
              variant="contained"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
      <Typography className={classes.footerText}>
        We value your interest and will get back to you promptly.
      </Typography>
    </div>
  );
};

export default Investor;
