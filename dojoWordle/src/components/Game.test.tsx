import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { Game } from './Game';
import { screen } from '@testing-library/react-native';
import React from 'react';

describe('Game', () => {
  it('should display properly', () => {
    renderWithProviders(<Game />);
    expect(screen.getByText('Hello Worldle ! ')).toBeTruthy();
  });
});