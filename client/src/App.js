import './App.css';
import { useEffect, useState } from 'react';
import { auth, provider } from './firebase/config';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  // Keep user logged in on page reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        saveUserToBackend(currentUser); // Save user in MongoDB
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        saveUserToBackend(result.user);
      })
      .catch((err) => console.error(err));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => console.error(err));
  };

  const saveUserToBackend = async (user) => {
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }),
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
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
