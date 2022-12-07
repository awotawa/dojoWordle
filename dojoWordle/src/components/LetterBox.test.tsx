import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { screen } from '@testing-library/react-native';
import React from 'react';
import { LetterBox } from './LetterBox';

describe('LetterBox', () => {
  it('should display properly', () => {
    renderWithProviders(<LetterBox letter="B" />);
    expect(screen.getByText('B')).toBeTruthy();
  });
});
