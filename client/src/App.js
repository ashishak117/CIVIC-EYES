import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setApiMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>CivicEye - Smart Grievance Reporting</h1>
      <p>Backend says: {apiMessage}</p>
    </div>
  );
}

export default App;
