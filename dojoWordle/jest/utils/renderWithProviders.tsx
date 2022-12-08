import { ThemeProvider } from '@emotion/react';
import { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { theme } from '../../src/shared/services/theme/theme';
import React from 'react';

export const renderWithProviders = (component: ReactElement) => {
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
