import styled from '@emotion/native';
import React, { useState } from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter, Validity } from './LetterBox';

export function Game() {
  const [letter, setLetter] = useState<PossibleLetter>(null);
  const [validity, setValidity] = useState<Validity>('nofill');

  return (
    <GameView>
      <LetterBox letter={letter} validity={validity} />
      <WordleKeyboard
        onKeyPress={(letter) => {
          setLetter(letter);
          checkValidity(letter, setValidity);
        }}
        onDelPress={() => {
          setLetter(null);
          setValidity('nofill');
        }}
      />
    </GameView>
  );
}

const GameView = styled.View({
  alignItems: 'center',
});

const checkValidity = (
  letter: PossibleLetter,
  setValidity: (validity: Validity) => void
) => {
  const validLetter = 'z';
  if (validLetter === letter) {
    setValidity('valid');
  }
  if (validLetter !== letter) {
    setValidity('invalid');
  }
};
