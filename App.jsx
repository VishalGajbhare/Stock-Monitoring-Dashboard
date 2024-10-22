import React, { useState } from 'react';
import useFetchStocks from './hooks/useFetchStocks';
import StockList from './components/StockList';
import './styles/App.scss';

const App = () => {
  const { stocks, loading } = useFetchStocks();
  const [filter, setFilter] = useState(0);

  const handleFilterChange = (e) => {
    setFilter(Number(e.target.value));
    localStorage.setItem('filter', e.target.value);
  };

  return (
    <div className="app">
      <h1>Stock Monitoring Dashboard</h1>
      <input
        type="number"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by % Change"
      />
      {loading ? (
        <p>Loading stocks...</p>
      ) : (
        <StockList stocks={stocks} filter={filter} />
      )}
    </div>
  );
};

export default App;
