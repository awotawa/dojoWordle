import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Game } from '../components/Game';
import * as SplashScreen from 'expo-splash-screen';
import { LetterBox } from '../components/LetterBox';
import { useLoadFonts } from '../shared/services/fonts/useLoadFonts';
import { theme } from '../shared/services/theme/theme';

export default function App() {
  const { areFontsLoaded } = useLoadFonts();

  useEffect(() => {
    if (areFontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [areFontsLoaded]);

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <GameViewContainer>
          <Game />
        </GameViewContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const GameViewContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.white,
  alignItems: 'center',
  justifyContent: 'center',
}));
