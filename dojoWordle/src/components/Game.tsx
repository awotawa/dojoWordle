import styled from '@emotion/native';
import React, { useState } from 'react';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter, Validity } from './LetterBox';

type Word = PossibleLetter[];

export function Game() {
  const [word, setWord] = useState<Word>(new Array(6).fill(null));

  return (
    <GameView>
      <WordleLetters>
        {word.map((letter, index) => (
          <LetterBox letter={letter} validity={'nofill'} key={index} />
        ))}
      </WordleLetters>
      <WordleKeyboard
        onKeyPress={(letter) => {
          addToWord({ letter, word, setWord });
        }}
        onDelPress={() => {
          removeFromWord({ word, setWord });
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

const findIndexOfFirstNullValueInWord = (array: Word) => {
  const isNull = (element: PossibleLetter) => element === null;
  return array.findIndex(isNull);
};

type addToWordProps = {
  letter: PossibleLetter;
  word: Word;
  setWord: (word: Word) => void;
};

const addToWord = ({ letter, word, setWord }: addToWordProps): void => {
  const newWord = [...word];

  const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
  if (indexOfFirstNull === -1) {
    setWord(newWord);
  }
  newWord[indexOfFirstNull] = letter;

  setWord(newWord);
};

type removeFromWordProps = {
  word: Word;
  setWord: (word: Word) => void;
};

const removeFromWord = ({ word, setWord }: removeFromWordProps) => {
  const newWord = [...word];

  const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
  if (indexOfFirstNull === -1) {
    newWord[5] = null;
    setWord(newWord);
  }
  if (indexOfFirstNull === 0) {
    setWord(newWord);
  }
  newWord[indexOfFirstNull - 1] = null;
  setWord(newWord);
};

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
