import React from 'react';
import { useNavigate } from "react-router-dom"


export const Header = () => {
  const navigate = useNavigate();
  return <div>
    <h2>
      <button onClick={ () => navigate('') }>Home</button>
      <button onClick={ () => navigate('counter') }>Counter</button>
    </h2>
  </div>
}

export default Header;
