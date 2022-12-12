import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { Game } from './Game';
import { fireEvent, screen, within } from '@testing-library/react-native';
import React from 'react';
import { Letter } from './LetterBox';

describe('Game', () => {
  it('should display properly', () => {
    renderWithProviders(<Game />);
    expect(screen.getAllByTestId('letterbox').length).toEqual(5 * 6); //wordle is always a 6 letter word and there's 5 attempts
    expect(screen.getByTestId('keyboard')).toBeTruthy();
  });
  it('should be able to add letter and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('T'));
    const wordleLetters = within(screen.getByTestId('wordleLetters1'));
    expect(wordleLetters.getByText('T')).toBeTruthy();
  });
  it('should be able to delete a letter from word and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('T'));
    const wordleLetters = within(screen.getByTestId('wordleLetters1'));
    expect(wordleLetters.getByText('T')).toBeTruthy();
    fireEvent.press(screen.getByText('DEL'));
    expect(wordleLetters.queryByText('T')).toBeFalsy();
  });
  it('should be able to delete a letter from an empty word and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('DEL'));
    const wordleLetters = within(screen.getByTestId('wordleLetters1'));
    expect(wordleLetters.getAllByText('.').length).toEqual(6);
  });
  it(`should not be able to add a letter when the user doesn't have any attempt left`, () => {
    renderWithProviders(<Game />);
    const keyboard = within(screen.getByTestId('keyboard'));
    //max out the 5 attempts
    for (let i = 0; i < 5; i++) {
      fillLineWithALetterAndValidate('t');
    }
    fillLineWithALetterAndValidate('a');
    const attempts = within(screen.getByTestId('attempts'));
    console.log(attempts.queryByText('A'));
    expect(attempts.queryByText('A')).toBeFalsy();
  });

  const fillLineWithALetterAndValidate = (letter: Letter) => {
    const upperCasedLetter = letter.toUpperCase();
    const keyboard = within(screen.getByTestId('keyboard'));
    //6 letters in a word
    for (let i = 0; i < 6; i++) {
      fireEvent.press(keyboard.getByText(upperCasedLetter));
    }
    fireEvent.press(keyboard.getByText('ENTER'));
  };
});
