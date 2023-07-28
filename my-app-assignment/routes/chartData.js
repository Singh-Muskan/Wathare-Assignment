// routes/chartData.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the chart data model
const ChartData = mongoose.model('chart_data', {
  name: String,
  marks: Number,
  age: Number,
  rollno: Number,
});

// GET all chart data
router.get('/', async (req, res) => {
  try {
    const chartData = await ChartData.find();
    console.log(chartData);
    res.json(chartData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
