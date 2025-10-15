import React from 'react';
import './components.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small>© {new Date().getFullYear()} MESHACK KIPRONO. Built with React.</small>
      </div>
    </footer>
  );
}
