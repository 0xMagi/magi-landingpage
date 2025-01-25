import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import research from "../../assets/research.png";
import farming from "../../assets/farming.png";
import launch from "../../assets/launch.png";
tokenomics from "../../assets/tokenomics.png";

const getStepsData = () => {
  return [
    {
      id: "1",
      title: "Q1, 2025",
      heading: "Initial Research",
      subheadings: [
        "Research and design of the game and RLF token",
        "Development of the progression system and initial NFTs",
        "Whitepaper release and private token sale",
      ],
      completed: false,
      icon: research,
    },
    {
      id: "2",
      title: "Q2, 2025",
      heading: "Testnet Implementation",
      subheadings: [
        "Deployment of the RLF smart contract",
        "Launch of the marketplace in testnet",
        "Testing progression system and foundational mechanics",
      ],
      completed: false,
      icon: tokenomics,
    },
    {
      id: "3",
      title: "Q3, 2025",
      heading: "Mainnet Expansion",
      subheadings: [
        "Launch of the marketplace on mainnet",
        "Introduction of PvE missions and Flash Sales",
        "Token burn events and ecosystem expansion",
      ],
      completed: false,
      icon: farming,
    },
    {
      id: "4",
      title: "Q4, 2025",
      heading: "Official Launch",
      subheadings: [
        "RealmForge official launch with full PvE support",
        "Expansion with new maps and additional character classes",
      ],
      completed: false,
      icon: launch,
    },
  ];
};

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 20,
    height: "100%",
    paddingLeft: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 15,
      padding: 0,
      paddingBottom: 15,
      paddingTop: 60,
    },
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: "center",
    fontSize: 36,
    fontWeight: 600,
    paddingTop: 50,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
  },
  sliderContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const Roadmap = () => {
  const classes = useStyles();

  const steps = getStepsData();
  const [x, setX] = useState(0);
  const [shift, setShift] = useState(window.innerWidth < 500 ? 400 : 400);

  const goRight = () => {
    x === -shift * (steps.length - 3) ? setX(0) : setX(x - shift);
  };
  const goLeft = () => {
    x === shift * (steps.length - 3) ? setX(x + shift) : setX(0);
  };

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          RealmForge Roadmap
        </h6>
      </div>

      <div className="row g-0 align-items-center ">
        <div className="col-2 col-md-1">
          <IconButton onClick={goLeft}>
            <ArrowBackIosIcon fontSize="large" style={{ color: "#ffffff" }} />
          </IconButton>
        </div>

        <div className="col-8 col-md-10">
          <div className="slider">
            {steps.map((step, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  transform: `translateX(${x}%)`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Avatar src={step.icon} variant="rounded" />
                  <hr style={{ width: "95%", marginTop: 1, marginBottom: 3 }} />
                  <h3 style={{ color: "#e5e5e5", fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <h5
                    style={{ fontSize: 14, color: "#e5e5e5", fontWeight: 600 }}
                  >
                    {step.heading}
                  </h5>
                  <ul style={{ borderLeft: "1px solid grey" }}>
                    {step.subheadings.map((subheading, idx) => (
                      <li
                        key={idx}
                        style={{ marginRight: -5, color: "#e5e5e5" }}
                      >
                        <p style={{ fontSize: 14, fontWeight: 500 }}>
                          {subheading}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-2 col-md-1">
          <IconButton onClick={goRight}>
            <ArrowForwardIosIcon
              fontSize="large"
              style={{ color: "#ffffff" }}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
