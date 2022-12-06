import styled from '@emotion/native';
import React from 'react';

type LetterBoxProps = {
  letter: string;
};

export const LetterBox = ({ letter }: LetterBoxProps) => {
  return (
    <LetterBoxContainer>
      <TextContainer>{letter}</TextContainer>
    </LetterBoxContainer>
  );
};

const LetterBoxContainer = styled.View(({ theme }) => ({
  borderWidth: 2,
  padding: theme.spacing[12],
  borderRadius: theme.spacing[12],
  width: theme.spacing[120],
  height: theme.spacing[120],
  justifyContent: 'center',
  alignItems: 'center',
}));

const TextContainer = styled.Text(({ theme }) => ({
  ...theme.typography.title.title1,
}));
