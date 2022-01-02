import React from 'react';

import { Container, Form } from './styles';

export const CreatorOfNews: React.FC = () => {
  return (
    <Container>
      <Form action="">
        <input placeholder='send your image here' type="text" />
        <textarea name="" id=""></textarea>

        <button>send news</button>
      </Form>
    </Container>
  )
}
