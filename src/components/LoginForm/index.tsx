import React, { FormEvent, useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { Container } from './styles';
import context from '../../contexts/NameContext'

export const LoginForm: React.FC = () => {
  const {setState, state} = useContext(context)

  
  const [nickname, setNickname] = useState('')
  let navigate = useNavigate();
 async function saveUser(e:FormEvent){
   if(nickname.trim()=== '') { 
     return 
    }
   e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${nickname}`)
    const data = await response.json()
    setState(data)
    console.log(data)
    navigate(`/`);
  }
  return (
    <Container>
      <form onSubmit={saveUser}>
        <input onChange={val => setNickname(val.target.value)} placeholder='nickname Github' type="text" />
        <button>login</button>
      </form>
    </Container>
  )
}
