const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins (you can specify frontend URL for more security)
app.use(cors());

// Your API routes here
app.get('/api/transactions', (req, res) => {
  const transactions = [
    { symbol: 'AAPL', quantity: 10, price: 150 },
    { symbol: 'GOOGL', quantity: 5, price: 2800 },
  ];
  res.json(transactions);
});

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});

