import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('https://mockapi.io/stocks'); // Replace with actual mock API
        setStocks(response.data);
      } catch (error) {
        console.error('Error fetching stocks', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  return { stocks, loading };
};

export default useFetchStocks;
