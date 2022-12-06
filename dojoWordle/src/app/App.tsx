import styled from "@emotion/native";
import { ThemeProvider } from "@emotion/react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Game } from "../components/Game";
import { theme } from "../shared/services/theme/theme";

export default function App() {
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
  alignItems: "center",
  justifyContent: "center",
}));
