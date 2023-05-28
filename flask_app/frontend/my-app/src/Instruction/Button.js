import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonPressed: false,
    };
  }

  handleButtonPress = () => {
    this.setState({ isButtonPressed: true });
  };

  handleButtonRelease = () => {
    this.setState({ isButtonPressed: false });
  };

  render() {
    const {className, label, onClick } = this.props;
    const { isButtonPressed } = this.state;

    return (
      <button
        className={`custom-button ${isButtonPressed ? 'pressed' : ''} ${className}`}
        onClick={onClick}
        onMouseDown={this.handleButtonPress}
        onMouseUp={this.handleButtonRelease}
        onMouseLeave={this.handleButtonRelease}
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
