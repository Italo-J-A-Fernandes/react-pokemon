import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/pokemonLogo.png'
import Button from '../../components/Button';

const HomePage = () => (
  <div className="home">
      <img src={Logo} alt="Logo Pokemón"/>
      <Link to="/map">
        <Button text={`START`} />
      </Link>
  </div>
);

export default HomePage;
