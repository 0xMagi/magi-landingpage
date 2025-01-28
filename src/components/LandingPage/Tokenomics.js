import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from "recharts";

// ... (mantenha os styles existentes)

const data = [
  // ... (mantenha os dados existentes)
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        padding: '12px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontSize: '14px',
        fontWeight: 500,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: payload[0].payload.color
        }}>
          <div style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: payload[0].payload.color,
            marginRight: 8
          }} />
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
      outerRadius={outerRadius + 3}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      style={{ filter: 'brightness(1.1)' }}
    />
  );
};

const Tokenomics = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={classes.background}>
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
                  outerRadius={120}
                  paddingAngle={3}
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
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
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
                    <span style={{
                      color: '#333',
                      fontSize: 13,
                      fontWeight: 500
                    }}>
                      {entry.value} <span style={{ opacity: 0.7 }}>({entry.payload.value}%)</span>
                    </span>
                  )}
                  wrapperStyle={{
                    paddingLeft: 20,
                    backgroundColor: '#f8f8f8',
                    borderRadius: 8,
                    padding: 10
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-md-6">
          <div className={classes.textContainer}>
            <h6 className={classes.heading}>Tokenomics & Locking</h6>
            <ul style={{
              paddingLeft: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 12
            }}>
              {data.map((item, index) => (
                <li
                  key={index}
                  className={classes.listItem}
                  style={{
                    padding: 8,
                    borderRadius: 6,
                    backgroundColor: `${item.color}15`,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  <div style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    marginRight: 10,
                    flexShrink: 0
                  }} />
                  <div>
                    <div style={{
                      fontWeight: 600,
                      fontSize: 13,
                      lineHeight: 1.3,
                      color: item.color
                    }}>
                      {item.name}
                    </div>
                    <div style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#fff'
                    }}>
                      {item.value}%
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
