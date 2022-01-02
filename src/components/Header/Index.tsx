import React from 'react';

import { Container } from './styles';
interface HeaderProps {
  userName?: string
}

export const Header: React.FC<HeaderProps> = ({userName}) => {
  return (
    <Container>
      <div className="container">
        <h1>create your news</h1>

        <p>welcome {userName ? userName : ''}</p>
      </div>
    </Container>
  )
}
