import styled from '@emotion/native';
import React, { useState } from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter, Validity } from './LetterBox';
import { useKeyboard } from './useKeyboard';

export type Word = PossibleLetter[];

export function Game() {
  const { word, addToWord, removeFromWord } = useKeyboard();

  return (
    <GameView>
      <WordleLetters>
        {word.map((letter, index) => (
          <LetterBox letter={letter} validity={'nofill'} key={index} />
        ))}
      </WordleLetters>
      <WordleKeyboard
        onKeyPress={(letter) => {
          addToWord(letter);
        }}
        onDelPress={() => {
          removeFromWord();
        }}
      />
    </GameView>
  );
}

const GameView = styled.View({
  alignItems: 'center',
});

const WordleLetters = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
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
