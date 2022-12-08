import styled from '@emotion/native';
import React from 'react';

export type Validity = 'valid' | 'semivalid' | 'invalid' | 'nofill';
export type Letter =
  | 'a'
  | 'z'
  | 'e'
  | 'r'
  | 't'
  | 'y'
  | 'u'
  | 'i'
  | 'o'
  | 'p'
  | 'q'
  | 's'
  | 'd'
  | 'f'
  | 'g'
  | 'h'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'w'
  | 'x'
  | 'c'
  | 'v'
  | 'b'
  | 'n';

export type PossibleLetter = Letter | null;

type LetterBoxProps = {
  letter: PossibleLetter;
  validity: Validity;
};

export const LetterBox = ({ letter, validity }: LetterBoxProps) => {
  return (
    <LetterBoxContainer testID="letterbox" validity={validity}>
      {letter === null ? (
        <TextContainer>.</TextContainer>
      ) : (
        <TextContainer>{letter.toUpperCase()}</TextContainer>
      )}
    </LetterBoxContainer>
  );
};

const LetterBoxContainer = styled.View<{ validity: Validity }>(
  ({ validity, theme }) => ({
    borderWidth: 2,
    padding: theme.spacing[12],
    borderRadius: theme.spacing[12],
    width: theme.spacing[120],
    height: theme.spacing[120],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color[validity],
  })
);

const TextContainer = styled.Text(({ theme }) => ({
  ...theme.typography.title,
}));
