import React from 'react';

import { Container, Label } from './styles';

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Palmeiras ainda não tem mundial, mas téra!</p>
      <img src="https://api.adorable.io/avatars/40/aleff.adorable.io.png" alt="" />
    </Container>
  );
}
