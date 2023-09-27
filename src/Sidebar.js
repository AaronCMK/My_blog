import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <HomeIcon /> <span>Home</span>
        </li>
        <li className="sidebar-item">
          <PersonIcon /> <span>About</span>
        </li>
        <li className="sidebar-item">
          <BookIcon /> <span>Blog</span>
        </li>
        <li className="sidebar-item">
          <ContactPageIcon /> <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;