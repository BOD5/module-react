import React, { FC } from 'react';
import './Header.css';
import Logo from '../../static/Mountain.png';

type HeaderProps = {
  children: React.ReactNode | React.ReactChildren,
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <div className="menu">
        { children }
      </div>
    </header>
  );
}

export default Header;
