import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import RegistroForm from './pages/register'
import LoginForm from './pages/login'

const App = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className='flex-grow flex flex-col overflow-hidden'>
          <Home />
        </div>
        <div>
          <RegistroForm />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default App;
