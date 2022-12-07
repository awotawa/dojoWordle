import styled from '@emotion/native';
import React, { useEffect } from 'react';
import { Game } from '../components/Game';
import * as SplashScreen from 'expo-splash-screen';
import { LetterBox } from '../components/LetterBox';
import { useLoadFonts } from '../shared/services/fonts/useLoadFonts';

export default function Home() {
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
    <GameViewContainer>
      <LetterBox letter="" />
      <Game />
    </GameViewContainer>
  );
}

const GameViewContainer = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.white,
  alignItems: 'center',
  justifyContent: 'center',
}));
