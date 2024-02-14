// Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div style={styles.loader}>
      <div style={styles.spinner}></div>
      <div style={styles.text}>Loading...</div>
    </div>
  );
};

const styles = {
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  spinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderLeftColor: '#333',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '20px',
    fontSize: '18px',
  },
  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

export default Loader;
