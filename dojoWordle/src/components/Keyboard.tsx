import styled from '@emotion/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Letter, PossibleLetter } from './LetterBox';

const KEY_HEIGHT = 55;

export type KeyboardKeys = Letter | 'del' | 'enter';

const lines: KeyboardKeys[][] = [
  ['a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'],
  ['enter', 'w', 'x', 'c', 'v', 'b', 'n', 'del'],
];

const getKeyWidthFactor = (key: KeyboardKeys): number => {
  switch (key) {
    case 'enter':
      return 2;
    case 'del':
      return 2;
    default:
      return 1;
  }
};

interface Props {
  onKeyPress?: (key: PossibleLetter) => void;
  onEnterPress?: () => void;
  onDelPress?: () => void;
}

export function WordleKeyboard({
  onKeyPress,
  onEnterPress,
  onDelPress,
}: Props) {
  const pressKey = (key: KeyboardKeys) => {
    switch (key) {
      case 'enter':
        onEnterPress?.();
        return;
      case 'del':
        onDelPress?.();
        return;
      default:
        onKeyPress?.(key);
    }
  };

  return (
    <SafeAreaView edges={['bottom']} testID="keyboard">
      <ContainerView>
        {lines.map((line) => (
          <RowContainer key={line.join('')}>
            {line.map((key) => (
              <LetterContainerStyle keyName={key} key={key}>
                <TouchableOpacity
                  onPress={() => pressKey(key)}
                  activeOpacity={0.7}
                >
                  <LetterView>
                    <Text>{key.toLocaleUpperCase()}</Text>
                  </LetterView>
                </TouchableOpacity>
              </LetterContainerStyle>
            ))}
          </RowContainer>
        ))}
      </ContainerView>
    </SafeAreaView>
  );
}

const ContainerView = styled.View(({ theme }) => ({
  padding: theme.spacing[8],
}));

const RowContainer = styled.View({
  flexDirection: 'row',
});

const LetterView = styled.View(({ theme }) => ({
  borderRadius: 4,
  backgroundColor: theme.palette.lightGrey,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

const LetterContainerStyle = styled.View<{ keyName: KeyboardKeys }>(
  ({ keyName, theme }) => ({
    width: `${getKeyWidthFactor(keyName) * 10}%`,
    height: KEY_HEIGHT,
    padding: theme.spacing[4],
  })
);
