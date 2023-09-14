import React from 'react';
import { useNavigate } from 'react-router-dom';


const NoMatch = () => {
  const navigation = useNavigate()

  return (
    <div>
      Unfortinately, but there is nothing to see!
      <button onClick={() => navigation(-1)}>Go back</button>
    </div>
  );
};

export default NoMatch;