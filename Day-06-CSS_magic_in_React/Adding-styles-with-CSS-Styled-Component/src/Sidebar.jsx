import React from 'react';
import './Sidebar.css';
import Button from './Button';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Options</h3>
      <p>Explore additional options below:</p>
      <Button label="Click me" />
    </aside>
  );
};

export default Sidebar;