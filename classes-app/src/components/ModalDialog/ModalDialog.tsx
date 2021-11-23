import React from 'react';
import './ModalDialog.css';

interface PropModalDialog {
  isOpen: Boolean;
  children: React.ReactNode;
}

class ModalDialog extends React.Component<PropModalDialog> {
  render() {
    const show = {
      display: (this.props.isOpen)? 'block' : 'none',
    }
    return (
      <div style={ show } className="blur" id="blur">
        <div className="center">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export { };
export default ModalDialog;
