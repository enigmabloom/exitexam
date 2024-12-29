// frontend/src/components/AddFeedbackForm.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const AddFeedbackForm = () => {
  const [courseName, setCourseName] = useState('');
  const [feedbackComments, setFeedbackComments] = useState('');
  const [feedbackRating, setFeedbackRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/feedback', { courseName, feedbackComments, feedbackRating })
      .then(() => {
        setCourseName('');
        setFeedbackComments('');
        setFeedbackRating('');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Feedback Comments"
        value={feedbackComments}
        onChange={(e) => setFeedbackComments(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Feedback Rating"
        type="number"
        value={feedbackRating}
        onChange={(e) => setFeedbackRating(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default AddFeedbackForm;