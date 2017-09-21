import React from 'react';
import ButtonComponent from './ButtonComponent';

const Footer = props =>
  <div className="footer">
    <ButtonComponent
      text="ALL"
      mode={props.mode}
      changeMode={props.changeMode}
    />
    <ButtonComponent
      text="DONE"
      mode={props.mode}
      changeMode={props.changeMode}
    />
    <ButtonComponent
      text="IN PROGRESS"
      mode={props.mode}
      changeMode={props.changeMode}
    />
  </div>
;

export default Footer;
