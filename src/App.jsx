import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Header from './components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './pages/Home';
import RegistroForm from './pages/register';
import LoginForm from './pages/login';

const App = () => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className='flex-grow flex flex-col overflow-hidden'>
          <Home />
        </div>
        <Routes>
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/Register' element={<RegistroForm />} />
        </Routes>
        
      </div>
    </div>
  );
};

export default App;
