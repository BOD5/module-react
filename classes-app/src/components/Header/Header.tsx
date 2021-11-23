import React from 'react';
import './Header.css';
import Logo from '../../static/Mountain.png';

type HeaderProps = {
  children: React.ReactNode | React.ReactChildren,
}

class Header extends React.Component<HeaderProps>{
  render() {
    return (
      <header>
        <img src={Logo} alt="Logo" />
        <div className="menu">
          { this.props.children }
        </div>
      </header>
    );
  }
}

export default Header;
