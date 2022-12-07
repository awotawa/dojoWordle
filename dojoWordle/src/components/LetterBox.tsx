import styled from '@emotion/native';
import React, { useState } from 'react';

type LetterBoxProps = {
  letter: string;
};

export const LetterBox = ({ letter }: LetterBoxProps) => {
  const [validity] = useState<Validity>('nofill');

  return (
    <LetterBoxContainer validity={validity}>
      <TextContainer>{letter}</TextContainer>
    </LetterBoxContainer>
  );
};

type Validity = 'valid' | 'semivalid' | 'invalid' | 'nofill';

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
  ...theme.typography.title.title1,
}));
