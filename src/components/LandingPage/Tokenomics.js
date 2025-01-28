import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// Estilos movidos para um arquivo separado (useStyles.js)
const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down("md")]: {
      paddingLeft: 10,
      paddingRight: 10,
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      flexDirection: "column-reverse",
      justifyContent: "flex-end",
    },
  },
  heading: {
    color: theme.palette.pbr.textPrimary,
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: "middle",
    wordSpacing: "0px",
    paddingTop: 0,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      marginBottom: 45,
      alignSelf: "center",
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
    backgroundColor: "black",
    padding: 40,
    color: "white",
    borderRadius: 10,
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      padding: 10,
    },
  },
}));

// Componente para o gráfico
const TokenomicsChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        label={({ name, value }) => `${name}: ${value}%`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name) => [`${value}%`, name]} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

// Componente para o texto
const TokenomicsText = ({ data, classes }) => (
  <div className={classes.textContainer}>
    <h6 className={classes.heading}>Tokenomics & Locking</h6>
    <ul>
      {data.map((item, index) => (
        <li key={index} style={{ color: item.color }}>
          <strong>{item.name}</strong>: {item.value}%
        </li>
      ))}
    </ul>
  </div>
);

// Componente principal
const Tokenomics = () => {
  const classes = useStyles();

  const data = useMemo(
    () => [
      { name: "In-game Mining & Platform Staking", value: 35, color: "#8e44ad" },
      { name: "Marketing", value: 20, color: "#2980b9" },
      { name: "Foundation", value: 20, color: "#27ae60" },
      { name: "Advisor & Strategic", value: 10, color: "#f39c12" },
      { name: "Private Sale", value: 10, color: "#e74c3c" },
      { name: "Public Sale", value: 3, color: "#9b59b6" },
      { name: "PancakeSwap Liquidity", value: 2, color: "#3498db" },
    ],
    []
  );

  return (
    <div className={classes.background}>
      <div className="row">
        <div className="col-md-6">
          <div className={classes.chartContainer}>
            <TokenomicsChart data={data} />
          </div>
        </div>
        <div className="col-md-6">
          <TokenomicsText data={data} classes={classes} />
        </div>
      </div>
    </div>
  );
};

// PropTypes para validação
TokenomicsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TokenomicsText.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  classes: PropTypes.object.isRequired,
};

export default Tokenomics;
