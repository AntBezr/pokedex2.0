import './Button.css'

import React from 'react';
const Button = ({ onClickAction, text }) => {
  return (
    <button className='button-49' onClick={onClickAction}>{text}</button>
  );
};

export default Button;