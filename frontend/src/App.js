import './App.css';

const session = require('express-session');

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false,
  // additional configurations
}));

const logout = async () => {
  try {
    const response = await fetch('/logout', { method: 'POST' });
    if (!response.ok) {
      throw new Error('Logout failed');
    }
    // Update state or redirect user
  } catch (error) {
    console.error('Logout error:', error);
  }
};

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
