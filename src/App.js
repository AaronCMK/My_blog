import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import ProfilePage from './ProfilePage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <header />
        <main>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            {/* Define more routes as needed */}
          </Routes>
        </main>
        <footer />
      </div>
    </Router>
  );
}

export default App;
