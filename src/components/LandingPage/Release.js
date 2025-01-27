import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 40,
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: 10,
      paddingBottom: 35,
    },
  },
  heading: {
    color: theme.palette.pbr.heading || "white",
    fontSize: 36,
    fontWeight: 600,
    textAlign: "center",
    paddingTop: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      marginBottom: 50,
    },
  },
}));

const data = [
  { month: 0, PublicSale: 0, Liquidity: 0, PrivateSale: 0, Advisors: 0, Marketing: 0, Staking: 0, Foundation: 0 },
  { month: 2, PublicSale: 3, Liquidity: 2, PrivateSale: 5, Advisors: 3, Marketing: 4, Staking: 6, Foundation: 10 },
  { month: 6, PublicSale: 6, Liquidity: 4, PrivateSale: 10, Advisors: 8, Marketing: 10, Staking: 15, Foundation: 25 },
  { month: 12, PublicSale: 10, Liquidity: 6, PrivateSale: 20, Advisors: 15, Marketing: 20, Staking: 35, Foundation: 50 },
  { month: 18, PublicSale: 15, Liquidity: 8, PrivateSale: 30, Advisors: 20, Marketing: 30, Staking: 50, Foundation: 75 },
  { month: 24, PublicSale: 20, Liquidity: 10, PrivateSale: 40, Advisors: 25, Marketing: 40, Staking: 70, Foundation: 100 },
];

const Release = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>Token release schedule</h6>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPublicSale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e91e63" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e91e63" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLiquidity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9c27b0" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9c27b0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPrivateSale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3f51b5" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAdvisors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2196f3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#2196f3" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00bcd4" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00bcd4" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorStaking" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorFoundation" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8bc34a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8bc34a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="PublicSale"
            stackId="1"
            stroke="#e91e63"
            fill="url(#colorPublicSale)"
          />
          <Area
            type="monotone"
            dataKey="Liquidity"
            stackId="1"
            stroke="#9c27b0"
            fill="url(#colorLiquidity)"
          />
          <Area
            type="monotone"
            dataKey="PrivateSale"
            stackId="1"
            stroke="#3f51b5"
            fill="url(#colorPrivateSale)"
          />
          <Area
            type="monotone"
            dataKey="Advisors"
            stackId="1"
            stroke="#2196f3"
            fill="url(#colorAdvisors)"
          />
          <Area
            type="monotone"
            dataKey="Marketing"
            stackId="1"
            stroke="#00bcd4"
            fill="url(#colorMarketing)"
          />
          <Area
            type="monotone"
            dataKey="Staking"
            stackId="1"
            stroke="#4caf50"
            fill="url(#colorStaking)"
          />
          <Area
            type="monotone"
            dataKey="Foundation"
            stackId="1"
            stroke="#8bc34a"
            fill="url(#colorFoundation)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Release;
