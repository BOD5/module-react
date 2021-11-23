import React from 'react';
import './StylizedInput.css';

type InputProps = {
  value: string,
  onChange: Function,
  placeholder: string,
}

class StylizedInput extends React.Component<InputProps> {
  render() {
    const toTop = {
      left: '20px',
      top: '-5px',
      fontSize: '12px',
    };
    return (
      <div className="input-wrapper stylized">
        <input
          type="text"
          className="input-stylized"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
        />
        <label style={(this.props.value.length > 0)? toTop : {}} className ="form-label">{ this.props.placeholder }</label>
      </div>
    )
  }
}

export { };
export default StylizedInput;
