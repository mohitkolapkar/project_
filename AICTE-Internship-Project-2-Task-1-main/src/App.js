import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import AuctionItem from './components/AuctionItem';
import PostAuction from './components/PostAuction';
import Landing from './components/Landing';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Online Auction Platform with React and ExpressJS Framework</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/signin" className="nav-link">Sign In</Link>
            <Link to="/dashboard" className="nav-link">Auctions</Link>
            <Link to="/post-auction" className="nav-link">Sell Item</Link>
            {isAuthenticated && (
              <button onClick={handleLogout} className="nav-link logout-button">
                Logout
              </button>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auction/:id" element={<AuctionItem />} />
            <Route path="/post-auction" element={<PostAuction />} />
          </Routes>
        </main>
        <footer>
          <p>© 2025 Auction App. Empowering Digital Commerce</p>
          <p>Connect with us: Facebook page(link)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;