import React from 'react';
import { Header } from '../components/Header/Index'
import { LoginForm } from '../components/LoginForm'
export const Login: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <LoginForm />
      </div>
    </>
  )
}
