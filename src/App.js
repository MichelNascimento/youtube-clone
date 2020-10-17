import React from 'react';

import Header from './components/Header/header';
import NavigationMenu from './components/NavigationMenu/navigationMenu';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationMenu />
    </div>
  );
}

export default App;
