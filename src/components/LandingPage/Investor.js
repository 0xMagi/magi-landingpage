import { Card } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

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

  imageWrapper: {
    padding: 10,
    height: "45px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 15,
    },
  },
  imageWrapperDotOracle: {
    padding: 2,
    height: "45px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 5,
    },
  },
  imageWrapperMetis: {
    padding: 2,
    height: "45px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "30px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
  imageWrapperMeland: {
    height: "70px",

    [theme.breakpoints.down("md")]: {
      height: "60px",
      padding: 5,
    },
  },
  imageWrapperUnifarm: {
    padding: 10,
    height: "50px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 10,
    },
  },
  imageWrapperKitsumon: {
    padding: 2,
    height: "55px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "30px",
      width: "100%",
    },
  },
  imageWizarre: {
    padding: 5,
    height: "55px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "40px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
  imageWrapperBMW: {
    height: "48px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      padding: 5,
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
  imageWrapper2: {
    padding: 10,
    height: "65px",
    [theme.breakpoints.down("md")]: {
      height: "40px",
      padding: 4,
    },
  },

  listItem: {
    alignSelf: "center",
    justifySelf: "center",
  },
  card: {
    padding: 5,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 100,
    },
  },
  cardCasper: {
    padding: 5,
    backgroundColor: "#e5e5e5",
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 140,
    },
  },
  cardWrapper: {
    padding: 5,
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

  noBgIcon: {
    backgroundColor: "transparent",

    height: "60px",
    width: "fit-content",
    [theme.breakpoints.down("md")]: {
      padding: 2,
      height: "50px",
      width: "fit-content",
      maxWidth: 70,
    },
  },
}));

const Investor = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>
        Investors and Partners<strong></strong>
      </h6>
      <div className={classes.logoContainer}>
        <div className={classes.logoWrapper}>
          <div className="row justify-content-center">
            {/* Your content remains here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
