import React from 'react';
export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">Indahproperty <strong>Pro</strong></div>
        <nav className="nav">
          <a href="#services" style={{color:'white'}}>Services</a>
          <a href="#portfolio" style={{color:'white'}}>Portfolio</a>
          <a href="#contact" style={{color:'white'}}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
