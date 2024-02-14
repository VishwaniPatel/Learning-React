// Project.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Task from './Task';

const Project = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Project {projectId}</h1>
      <Task/>
    </div>
  );
};

export default Project;
