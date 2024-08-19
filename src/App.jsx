// frontend/App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (showData) {
      fetch('http://localhost:3001/api/data')
        .then(response => response.json())
        .then(data => setData(data));
    }
  }, [showData]);

  const handleClick = () => {
    setShowData(true);
  };

  return (
    <div>
      <h1>Data from backend</h1>
      <ul>
        <button onClick={handleClick}>Enjoy the library</button>
        {showData && data.map(item => (
          <li key={item.id}>{item.name} ({item.age})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;