import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Game } from "./components/Game";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <GameViewContainer>
        <Game />
      </GameViewContainer>
    </SafeAreaProvider>
  );
}

const GameViewContainer = styled.View({
  flex: 1,
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  justifyContent: "center",
});
