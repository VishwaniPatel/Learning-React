import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-700 text-white w-64">
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-600">Dashboard</li>
          <li className="p-4 hover:bg-gray-600">Analytics</li>
          <li className="p-4 hover:bg-gray-600">Reports</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
