// ProjectList.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
  { id: 3, name: 'Project 3' }
];

const ProjectList = () => {
    
  return (
    <div>
      <h1>Project List</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
      <Link to='..' relative='path'>Back to Home</Link>
      <Outlet/>
    </div>
  );
};

export default ProjectList;
