import styled from '@emotion/native';
import React from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox } from './LetterBox';

export function Game() {
  return (
    <GameView>
      <LetterBox letter={'A'} validity={'nofill'} />
      <WordleKeyboard />
    </GameView>
  );
}

const GameView = styled.View({
  alignItems: 'center',
});
