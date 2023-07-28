const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;

const MONGODB_URI = 'mongodb://localhost:27017';
const DATABASE_NAME = 'app_db';
const COLLECTION_NAME = 'chart_data';

// Use cors middleware to enable CORS
app.use(cors());

// MongoDB connection code
mongoose.connect('mongodb://127.0.0.1:27017/app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello, welcome to this basic get API');
});

// Register the route for chart data
const chartDataRouter = require('./routes/chartData');
app.use('/chartdata', chartDataRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
