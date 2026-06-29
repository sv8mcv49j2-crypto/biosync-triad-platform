import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; 2026 BioSync Triad. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          <a href="#" className="hover:text-purple-600">Terms of Service</a>
          <a href="#" className="hover:text-purple-600">HIPAA Compliance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
