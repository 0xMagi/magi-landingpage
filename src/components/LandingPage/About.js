import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import war3 from '../../assets/about.png';

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 100,
    paddingBottom: 100,
    height: '100%',

    paddingLeft: 30,
    paddingRight: 30,

    [theme.breakpoints.down('sm')]: {
      padding: 10,

      marginBottom: 20,
    },
  },
  image: {
    width: 600,
    height: 'auto',
    marginBottom: 10,

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: 30,
      marginBottom: 30,
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 650,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: 'black',
    padding: 40,
    [theme.breakpoints.down('md')]: {
      marginTop: 15,
      padding: 20,
    },
  },
  subHeading: {
    fontSize: 42,
    fontFamily: 'Balsamiq Sans',

    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
      marginTop: 10,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    margin: 0,
    letterSpacing: '-0.6px',
    paddingTop: 6,
    paddingBottom: 10,
    textAlign: 'left',
    lineHeight: 1.75,
    fontSize: 17,
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      marginTop: 10,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-7">
          <div className="text-center">
            {' '}
            <img src={war3} className={classes.image} />
          </div>
        </div>
        <div className="col-md-5">
          {' '}
          <div className={classes.textContainer}>
            <h5 className={classes.subHeading}>The Decentralized Fighting Game Platform</h5>
            <Typography component="p" className={classes.para}>
            Magi is a blockchain-based NFT gaming platform that reimagines the gaming experience by combining the power of cryptocurrency and NFTs.
            Inspired by the latest trends in the crypto market, Magi merges these innovations to create a dynamic and engaging ecosystem.
              <br />
              <div style={{ marginTop: 10 }}>
            The game allows players to create unique characters and engage in exciting battles against other players. Additionally, Magi features a robust NFT marketplace
            where players can trade their items, weapons, and upgraded equipment using cryptocurrencies, fostering a decentralized economy driven by the community.
              </div>{' '}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
