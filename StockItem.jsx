import React from 'react';
import './StockItem.scss'; // Create an SCSS file for styling

const StockItem = ({ stock }) => {
  const { symbol, price, percentageChange } = stock;
  const changeClass = percentageChange > 5 ? 'high-increase' : percentageChange < -5 ? 'high-decrease' : '';

  return (
    <div className={`stock-item ${changeClass}`}>
      <h3>{symbol}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Change: {percentageChange.toFixed(2)}%</p>
    </div>
  );
};

export default StockItem;
