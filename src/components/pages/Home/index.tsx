import React from 'react';
import Coach from './components/Coach';
import AccessBars from './components/AccessBars';
import AccessBarsCourse from './components/AccessBarsCourse';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <Coach />
      <AccessBars />
      <AccessBarsCourse />
    </div>
  );
};

export default Home;
