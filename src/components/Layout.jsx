import React from 'react';
import Footer from '@components/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
