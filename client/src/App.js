import './App.css';
import { useState } from 'react';
import { auth, provider } from './firebase/config';
import { signInWithPopup } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <h1>CivicEye - Smart Grievance Reporting</h1>
      {!user ? (
        <button onClick={handleLogin}>Login with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photoURL} alt="profile" width="80" />
        </div>
      )}
    </div>
  );
}

export default App;
