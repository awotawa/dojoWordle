import styled from '@emotion/native';
import React, { useState } from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter, Validity } from './LetterBox';

export function Game() {
  const [letter, setLetter] = useState<PossibleLetter>(null);

  return (
    <GameView>
      <LetterBox letter={letter} validity={checkValidity(letter)} />
      <WordleKeyboard
        onKeyPress={(letter) => {
          setLetter(letter);
        }}
        onDelPress={() => {
          setLetter(null);
        }}
      />
    </GameView>
  );
}

const GameView = styled.View({
  alignItems: 'center',
});

const checkValidity = (letter: PossibleLetter): Validity => {
  const validLetter = 'z';
  if (letter === validLetter) {
    return 'valid';
  }
  if (letter === null) {
    return 'nofill';
  }
  return 'invalid';
};
