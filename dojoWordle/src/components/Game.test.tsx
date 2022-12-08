import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { Game } from './Game';
import { fireEvent, screen } from '@testing-library/react-native';
import React from 'react';
// import { toHaveStyle, toHaveProp } from '@testing-library/jest-native';

// expect.extend({ toHaveStyle, toHaveProp });

describe('Game', () => {
  it('should display properly', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('letterbox')).toBeTruthy();
    expect(screen.getByTestId('keyboard')).toBeTruthy();
  });
  it('should be valid (and green) if we press on the letter Z', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('Z'));
    expect(screen.getByTestId('letterbox')).toHaveProp('validity', 'valid');
    expect(screen.getByTestId('letterbox')).toHaveStyle([
      { backgroundColor: '#B3CC20' },
    ]);
  });
  it('should be invalid (and red) if we press on the letter A', () => {
    renderWithProviders(<Game />);
    fireEvent.press(screen.getByText('A'));
    expect(screen.getByTestId('letterbox')).toHaveProp('validity', 'invalid');
    expect(screen.getByTestId('letterbox')).toHaveStyle([
      { backgroundColor: '#DC045B' },
    ]);
  });
});
