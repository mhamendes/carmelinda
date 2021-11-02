import React from 'react';

import Introduction from './components/Introduction';
import Coach from './components/Coach';
import AccessBars from './components/AccessBars';
import AccessBarsCourse from './components/AccessBarsCourse';
import Numerology from './components/Numerology';
import FamiliarConstellations from './components/FamiliarConstellations';
import GemellarConstellations from './components/GemellarConstellations';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <Introduction />
      <Coach />
      <AccessBars />
      <AccessBarsCourse />
      <Numerology />
      <FamiliarConstellations />
      <GemellarConstellations />
    </div>
  );
};

export default Home;
