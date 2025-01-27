import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: "100%",
    display: "flex",
    justifyContent: "space-between", // Espaçamento maior entre os elementos
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,

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
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 100, // Mais espaço entre o gráfico e o quadro
    backgroundColor: "black",
    padding: 40,
    color: "white",
    borderRadius: 10, // Cantos arredondados
    minWidth: 300,
    textAlign: "center", // Centraliza o conteúdo
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      padding: 10,
    },
  },
  listItems: {
    marginTop: 20,
    lineHeight: 1.8,
    fontSize: 16,
    wordWrap: "break-word",
  },
  chartContainer: {
    position: "relative", // Para controlar a posição do gráfico
    padding: 20, // Espaço extra ao redor do gráfico
  },
}));

const data = [
  { name: "In-game Mining & Platform Staking", value: 35, color: "#8e44ad" },
  { name: "Marketing", value: 20, color: "#e67e22" },
  { name: "Foundation", value: 20, color: "#27ae60" },
  { name: "Advisor & Strategic", value: 10, color: "#f39c12" },
  { name: "Private Sale", value: 10, color: "#c0392b" },
  { name: "Public Sale", value: 3, color: "#9b59b6" },
  { name: "PancakeSwap Liquidity", value: 2, color: "#3498db" },
];

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className="row">
        <div className={`col-md-6 ${classes.chartContainer}`}>
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
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={`col-md-6 ${classes.textContainer}`}>
          <h2>Tokenomics & Locking</h2>
          <ul className={classes.listItems}>
            {data.map((entry, index) => (
              <li key={index} style={{ color: entry.color }}>
                <strong>{entry.name}:</strong> {entry.value}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
