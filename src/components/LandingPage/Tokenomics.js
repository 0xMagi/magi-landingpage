import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#f8f9fa",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: "flex",
      flexDirection: "column-reverse",
      justifyContent: "flex-end",
    },
  },
  heading: {
    color: "#333",
    fontSize: 36,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      marginBottom: 45,
    },
  },
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 600,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 150,
    backgroundColor: "#343a40",
    padding: 40,
    color: "white",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      padding: 10,
    },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 12,
    fontSize: 14,
    color: "#fff",
    "&:before": {
      content: '""',
      display: "inline-block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      marginRight: 8,
    },
  },
}));

const data = [
  { name: "In-game Mining & Platform Staking", value: 35, color: "#8e44ad" },
  { name: "Marketing", value: 20, color: "#2980b9" },
  { name: "Foundation", value: 20, color: "#27ae60" },
  { name: "Advisor & Strategic", value: 10, color: "#f39c12" },
  { name: "Private Sale", value: 10, color: "#e74c3c" },
  { name: "Public Sale", value: 3, color: "#9b59b6" },
  { name: "PancakeSwap Liquidity", value: 2, color: "#3498db" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ color: payload[0].payload.color, margin: 0 }}>
          <strong>{payload[0].name}</strong>: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h6 className={classes.heading}>Tokenomics & Locking</h6>
      <div className="row">
        <div className="col-md-6">
          <div className={classes.chartContainer}>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={130}
                  paddingAngle={5}
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelStyle={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    fill: "#333",
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="#ffffff"
                      strokeWidth={1}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                {/* Removi a legenda */}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6">
          <div className={classes.textContainer}>
            <ul style={{ paddingLeft: 0, listStyle: "none" }}>
              {data.map((item, index) => (
                <li
                  key={index}
                  className={classes.listItem}
                  style={{ "&::before": { backgroundColor: item.color } }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      marginRight: 8,
                    }}
                  />
                  <strong>{item.name}</strong>: {item.value}%
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
