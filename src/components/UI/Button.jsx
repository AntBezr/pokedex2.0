import React from 'react';
import './Button.css'
const Button = ({onClickAction, text}) => {
  return (
   <button className='primaryButton' onClick={onClickAction}>{text}</button>
  );
};

export default Button;