import styled from '@emotion/native';
import React from 'react';

export type Validity = 'valid' | 'semivalid' | 'invalid' | 'nofill';

type LetterBoxProps = {
  letter: string;
  validity: Validity;
};

export const LetterBox = ({ letter, validity }: LetterBoxProps) => {
  return (
    <LetterBoxContainer testID="letterbox" validity={validity}>
      <TextContainer>{letter}</TextContainer>
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
