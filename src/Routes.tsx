import React from 'react';
import { Home } from './pages/Home';
import { Login } from './pages/Login'
import {ContextUserProvider} from './contexts/NameContext'
import {  
  Route,
  Routes
} from 'react-router-dom';
import { Header } from './components/Header/Index';

export const Rotas: React.FC = () => {
  return (
    <ContextUserProvider>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="Login" element = {<Login />}/>
    </Routes>
    </ContextUserProvider>
  )
}