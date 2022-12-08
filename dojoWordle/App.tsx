import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/app/Home';
import { theme } from './src/shared/services/theme/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
