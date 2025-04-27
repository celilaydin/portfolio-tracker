const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ symbol: "AAPL", quantity: 10, price: 150 }]);
});

module.exports = router;
