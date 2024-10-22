import React from 'react';
import StockItem from './StockItem';

const StockList = ({ stocks, filter }) => {
  return (
    <div className="stock-list">
      {stocks.filter(stock => Math.abs(stock.percentageChange) > filter).map(stock => (
        <StockItem key={stock.symbol} stock={stock} />
      ))}
    </div>
  );
};

export default StockList;
