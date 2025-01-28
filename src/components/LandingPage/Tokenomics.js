import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts";

const data = [
  { name: "Development", value: 35, color: "#ff6384" },
  { name: "Marketing", value: 25, color: "#36a2eb" },
  { name: "Liquidity", value: 20, color: "#ffcd56" },
  { name: "Team", value: 15, color: "#4bc0c0" },
  { name: "Community", value: 5, color: "#9966ff" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "12px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: payload[0].payload.color,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: payload[0].payload.color,
              marginRight: 8,
            }}
          />
          <strong>{payload[0].name}</strong>: {payload[0].value}%
        </div>
      </div>
    );
  }
  return null;
};

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 5}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      style={{ filter: "brightness(1.2)" }}
    />
  );
};

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        padding: "40px 20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Tokenomics & Locking
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 50%" }}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={130}
                paddingAngle={5}
                startAngle={90}
                endAngle={-270}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                animationDuration={400}
                stroke="#ffffff"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconSize={14}
                iconType="circle"
                formatter={(value, entry) => (
                  <span
                    style={{
                      color: entry.payload.color,
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {value} <span style={{ opacity: 0.7 }}>({entry.payload.value}%)</span>
                  </span>
                )}
                wrapperStyle={{
                  paddingLeft: 20,
                  backgroundColor: "#ffffff",
                  borderRadius: 8,
                  padding: 10,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: "1 1 40%" }}>
          <ul
            style={{
              paddingLeft: 0,
              listStyle: "none",
              display: "grid",
              gap: "12px",
            }}
          >
            {data.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: `${item.color}20`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    marginRight: 10,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: 1.3,
                      color: item.color,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#333",
                    }}
                  >
                    {item.value}%
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
