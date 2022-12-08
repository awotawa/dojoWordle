import { renderWithProviders } from '../../jest/utils/renderWithProviders';
import { screen } from '@testing-library/react-native';
import React from 'react';
import { LetterBox } from './LetterBox';

describe('LetterBox', () => {
  it('should display properly', () => {
    renderWithProviders(<LetterBox letter="b" validity="invalid" />);
    expect(screen.getByText('B')).toBeTruthy();
  });
  it("should display properly when it's valid and be green", () => {
    renderWithProviders(<LetterBox letter="b" validity="valid" />);
    expect(screen).toMatchSnapshot();
  });
  it("should display properly when it's semivalid and be yellow", () => {
    renderWithProviders(<LetterBox letter="a" validity="semivalid" />);
    expect(screen).toMatchSnapshot();
  });
  it("should display properly when it's invalid and be red", () => {
    renderWithProviders(<LetterBox letter="m" validity="invalid" />);
    expect(screen).toMatchSnapshot();
  });
});
