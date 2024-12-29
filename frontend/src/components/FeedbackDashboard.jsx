// frontend/src/components/FeedbackDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('/api/feedback')
      .then(res => setFeedbacks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/feedback/${id}`)
      .then(() => setFeedbacks(feedbacks.filter(feedback => feedback._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Course Name</TableCell>
          <TableCell>Feedback Comments</TableCell>
          <TableCell>Feedback Rating</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {feedbacks.map(feedback => (
          <TableRow key={feedback._id}>
            <TableCell>{feedback.courseName}</TableCell>
            <TableCell>{feedback.feedbackComments}</TableCell>
            <TableCell>{feedback.feedbackRating}</TableCell>
            <TableCell>
              <Button color="primary">Edit</Button>
              <Button color="secondary" onClick={() => handleDelete(feedback._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FeedbackDashboard;