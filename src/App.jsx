import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default App;
