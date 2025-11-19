import React from 'react';
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Indahproperty Pro — All rights reserved.
      </div>
    </footer>
  )
}
