import React from 'react';
import dynamic from 'next/dynamic';

import CallOut from './components/CallOut';
import Introduction from './components/Introduction';
const Coach = dynamic(() => import('./components/Coach'));
const AccessBars = dynamic(() => import('./components/AccessBars'));
const AccessBarsCourse = dynamic(() => import('./components/AccessBarsCourse'));
const Numerology = dynamic(() => import('./components/Numerology'));
const FamiliarConstellations = dynamic(
  () => import('./components/FamiliarConstellations')
);
const GemellarConstellations = dynamic(
  () => import('./components/GemellarConstellations')
);

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
