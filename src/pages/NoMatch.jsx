import './style/NoMatch.css'

import Button from '../components/UI/Button'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigation = useNavigate()

  return (
    <div className='missingPath'>
      <div className='modal'>

      <h2>Unfortunately, there is nothing to see!</h2>
      <Button onClickAction={() => navigation(-1)} text={"Go back"}></Button>
      </div>
    </div>
  );
};

export default NoMatch;