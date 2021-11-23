import React from 'react';
import './MenuBtn.css';

export interface  BtnProps { 
  children: React.ReactNode
  onClick?: Function
}

class MenuBtn extends React.Component<BtnProps> {
  render () {
    return (
      <button className='menu-btn' onClick={() => (this.props.onClick)? this.props.onClick() : null}>
        { this.props.children }
      </button>
    )
  }
}

export {};
export default MenuBtn;
