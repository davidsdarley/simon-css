import React from 'react';

import { Players } from './players';
import { SimonGame } from './simonGame';

export function Play(props) {
  console.log("Play started")
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}