import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">© 2023 proResume Builder</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-400">Privacy Policy</Link>
          <Link to="/" className="hover:text-blue-400">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
