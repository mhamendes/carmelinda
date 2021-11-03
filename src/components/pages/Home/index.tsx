import React from 'react';

import CallOut from './components/CallOut';
import Introduction from './components/Introduction';
import Coach from './components/Coach';
import AccessBars from './components/AccessBars';
import AccessBarsCourse from './components/AccessBarsCourse';
import Numerology from './components/Numerology';
import FamiliarConstellations from './components/FamiliarConstellations';
import GemellarConstellations from './components/GemellarConstellations';

// import { Container } from './styles';

export interface Props {
  isVisible: boolean;
}

const Home: React.FC<Props> = ({ isVisible }) => {
  return (
    <div>
      <CallOut isVisible={isVisible} />
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
