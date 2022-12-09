import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { Game } from './Game';
import { fireEvent, screen } from '@testing-library/react-native';
import React from 'react';

describe('Game', () => {
  it('should display properly', () => {
    renderWithProviders(<Game />);
    expect(screen.getAllByTestId('letterbox').length).toEqual(6); //wordle is always a 6 letter word
    expect(screen.getByTestId('keyboard')).toBeTruthy();
  });
  it('should be able to add letter and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('T'));
    expect(screen).toMatchSnapshot();
  });
  it('should be able to delete a letter from word and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('T'));
    expect(screen).toMatchSnapshot();
    fireEvent.press(screen.getByText('DEL'));
    expect(screen).toMatchSnapshot();
  });
  it('should be able to delete a letter from an empty word and it displays properly', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('DEL'));
    expect(screen).toMatchSnapshot();
  });
});
