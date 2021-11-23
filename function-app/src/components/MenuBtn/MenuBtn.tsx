import React, { FC } from 'react';
import './MenuBtn.css';

export interface  BtnProps { 
  children: React.ReactNode
  onClick?: Function
}

const MenuBtn: FC<BtnProps> = ({ children, onClick }) => {
  return (
    <button className='menu-btn' onClick={() => (onClick)? onClick() : null}>
      { children }
    </button>
  )
}

export {};
export default MenuBtn;
