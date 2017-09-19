import React from 'react';

const ButtonComponent = props => (
  props.text === props.mode ?
  <div className="footer-selected">{props.text}</div> :
  <button
    onClick={() => {
      props.changeMode(props.text);
    }}
    className="footer-button"
  >
    {props.text}
  </button>
);

export default ButtonComponent;
