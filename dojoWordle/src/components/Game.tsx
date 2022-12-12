import styled from '@emotion/native';
import React from 'react';
import { View } from 'react-native';
import { WordleKeyboard } from './Keyboard';
import { LetterBox, PossibleLetter } from './LetterBox';
import { useKeyboard } from './useKeyboard';

export type Word = PossibleLetter[];

export function Game() {
  const { attempts, addToWord, removeFromWord, validate, checkLetterValidity } =
    useKeyboard({
      correctWord: 'wordle',
    });

  return (
    <GameView>
      <View testID="attempts">
        {attempts.map((attempt, indexOfAttempt) => (
          <View key={`attempt#${indexOfAttempt + 1}`}>
            <WordleLetters testID={`wordleLetters${indexOfAttempt + 1}`}>
              {attempt.map((letter, index) => (
                <LetterBox
                  letter={letter}
                  validity={checkLetterValidity({ indexOfAttempt, index })}
                  key={`${index}-${letter}`}
                />
              ))}
            </WordleLetters>
          </View>
        ))}
      </View>
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
