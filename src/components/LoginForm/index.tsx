import React, { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Container } from './styles';

export const LoginForm: React.FC = () => {
  const [nickname, setNickname] = useState('')
  let navigate = useNavigate();
 async function saveUser(e:FormEvent){
   e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${nickname}`)
    const data = await response.json()

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
