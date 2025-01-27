import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import SportsEsportsOutlined from '@material-ui/icons/SportsEsportsOutlined';
import TrendingUpOutlined from '@material-ui/icons/TrendingUpOutlined';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  item: {
    marginBottom: 40,
    maxWidth: 400,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: 'black',
    padding: 30,
    height: '350px',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  heading: {
    // color: theme.palette.pbr.textPrimary,
    color: theme.palette.pbr.heading,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      fontSize: 24,
      marginBottom: 25,
    },
  },
  subHeading: {
    color: theme.palette.pbr.textPrimary,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 15,
      marginBottom: 25,
    },
  },
  para: {
    color: theme.palette.pbr.textPrimary,
    verticalAlign: 'baseline',
    // letterSpacing: "-0.7px",
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  subheading: {
    color: theme.palette.pbr.textPrimary,
  },
}));

const Feature = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Magi Products</h6>

      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <SportsEsportsOutlined fontSize="large" />
            Magi Realm
          </h5>
          <p className={classes.para}>
            The decentralized NFT-based fighting game. Players can create and upgrade their own characters,
            enjoying battles while earning profits. The mission and reward system allows players to progress
            and be rewarded as they reach new levels.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <TrendingUpOutlined fontSize="large" /> Magi Marketplace
          </h5>
          <p className={classes.para}>
            The NFT marketplace, where players can buy, sell and bid equipment or weapons for their character. The
            players can acquire funds by selling their upgraded equipment and weapons, in the native MAGI token.
          </p>
        </div>

        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> Magi Prediction
          </h5>
          <p className={classes.para}>
          The MAGI Prediction System is an innovative and decentralized feature that allows players to predict whether
          the price of supported assets will go up (Bull) or down (Bear) within a defined timeframe. Participants place
          their bets using the native MAGI token, forming a collective prize pool. At the end of each round, rewards are
          distributed to players who made the correct predictions, based on price data provided by a trusted oracle. This
          feature combines fun and strategy, allowing users to earn rewards while gamifying and interacting with market
          behavior.
          </p>
        </div>
        <div className={classes.item}>
          <h5 className={classes.subheading}>
            <CardGiftcardOutlined fontSize="large" /> Magi Lottery
          </h5>
          <p className={classes.para}>
          Magi Lottery is a decentralized lottery system within the MAGI project, where players choose up to 6 numbers from 60 available
          options to compete for MAGI token prizes. The draw takes place monthly, and players who match more numbers win prizes. The funds
          raised from the bets are distributed among the winners, with different prize tiers for 6, 5, and 4 correct guesses. The draw is
          transparent and secure, conducted in a decentralized manner on the blockchain, ensuring fairness and trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
