import React from 'react';

function MainContent() {
  return (
    <main className="p-4 flex-1">
      <h2 className="text-2xl mb-4">Welcome to the Dashboard!</h2>
      
      {/* Card component */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl mb-2">Card Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus feugiat mollis.</p>
      </div>
      
      {/* Card component */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-4">
        <h3 className="text-xl mb-2">Another Card Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus feugiat mollis.</p>
      </div>
    </main>
  );
}

export default MainContent;
