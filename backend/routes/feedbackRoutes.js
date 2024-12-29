// backend/routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

// Get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new feedback
router.post('/', async (req, res) => {
  const { courseName, feedbackComments, feedbackRating } = req.body;

  try {
    const newFeedback = new Feedback({ courseName, feedbackComments, feedbackRating });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update feedback
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { courseName, feedbackComments, feedbackRating } = req.body;

  try {
    const updatedFeedback = await Feedback.findByIdAndUpdate(
      id,
      { courseName, feedbackComments, feedbackRating },
      { new: true }
    );
    res.json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete feedback
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Feedback.findByIdAndDelete(id);
    res.json({ message: 'Feedback deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;