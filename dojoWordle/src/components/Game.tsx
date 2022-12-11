import styled from '@emotion/native';
import React, { useState } from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter, Validity } from './LetterBox';
import { findIndexOfFirstNullValueInWord, useKeyboard } from './useKeyboard';

export type Word = PossibleLetter[];

export function Game() {
  const { word, addToWord, removeFromWord, validate, checkLetterValidity } =
    useKeyboard({
      correctWord: 'wordle',
    });

  return (
    <GameView>
      <WordleLetters testID="wordleLetters">
        {word.map((letter, index) => (
          <LetterBox
            letter={letter}
            validity={checkLetterValidity({ index })}
            key={`${index}-${letter}`}
          />
        ))}
      </WordleLetters>
      <WordleKeyboard
        onKeyPress={addToWord}
        onDelPress={removeFromWord}
        onEnterPress={validate}
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
