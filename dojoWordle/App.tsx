import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/app/Home';
import { Game } from './src/components/Game';

export default function App() {
  return <Home />;
}
