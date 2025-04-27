import React, { useEffect, useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch portfolio data from backend API
    fetch('portfolio-tracker-backend-gvadf4hwgebth2cr.centralus-01.azurewebsites.net/api/transactions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.symbol} - {t.quantity} shares @ ${t.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
