// Task.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Task() {
  const { projectId, taskId } = useParams();

  return (
    <div>
      <h3>Project ID: {projectId}</h3>
      <h4>Task ID: {taskId}</h4>
      <p>This is the task content.</p>
      <Link to='..'>Back to ProjectList</Link>
    </div>
  );
}

export default Task;
