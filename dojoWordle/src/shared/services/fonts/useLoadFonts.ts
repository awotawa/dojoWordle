import {
  useFonts as useGoogleFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';

export const useLoadFonts = () => {
  const [fontsLoaded] = useGoogleFonts({
    'Roboto-Regular': Roboto_400Regular,
    'Roboto-Medium': Roboto_500Medium,
    'Roboto-Bold': Roboto_700Bold,
  });
  const [gothamFontLoaded] = useFonts({
    'Gotham-Medium': require('../../../../assets/fonts/GothamMedium.otf'),
  });

  return { areFontsLoaded: fontsLoaded && gothamFontLoaded };
};
