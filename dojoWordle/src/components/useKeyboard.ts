import { useState } from "react";
import { Word } from "./Game";
import { PossibleLetter, Validity } from "./LetterBox";

export const findIndexOfFirstNullValueInWord = (array: Word) => {
    const isNull = (element: PossibleLetter) => element === null;
    return array.findIndex(isNull);
};

type useKeyboardProps = {
    correctWord: string
}

export const useKeyboard = ({correctWord}: useKeyboardProps) => {
    const [word, setWord] = useState<Word>(new Array(6).fill(null));
    const [checking, setChecking] = useState<boolean>(false);

    const addToWord = (letter: PossibleLetter): void => {
        setWord(word => {
            const newWord = [...word];
            const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
            if (indexOfFirstNull === -1) {
                return newWord;
            }
            newWord[indexOfFirstNull] = letter;
            return newWord;
        })

    };

    const removeFromWord = () => {
        setWord((word) => {
            const newWord = [...word];
            const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
            if (indexOfFirstNull === -1) {
                newWord[5] = null;
                return newWord;
            }
            if (indexOfFirstNull === 0) {
                return newWord;
            }
            newWord[indexOfFirstNull - 1] = null;
            return newWord;
        })
    };

    const validate = () => {
        const indexOfFirstNull = findIndexOfFirstNullValueInWord(word);
        if (indexOfFirstNull === -1){
            setChecking(true)
        }
    }

    type Validation = 'x' | 'o';

    const checkWord = (): Validation[] => {
        const checkedWord: Validation[] = []
        word.forEach((letter, index) => {
            if (letter === correctWord[index]){
                checkedWord.push('o')
            }
            if (letter !== correctWord[index]){
                checkedWord.push('x')
            }
        })
        return checkedWord
    }

    type checkLetterValidityProps = {
        index: number;
    };

    const checkLetterValidity = ({
    index,
    }: checkLetterValidityProps): Validity => {
    const checkedWord = checkWord();
    const indexOfFirstNull = findIndexOfFirstNullValueInWord(word);
    if (indexOfFirstNull === -1 && checking) {
        if (checkedWord[index] === 'o') {
            return 'valid';
        }
        if (checkedWord[index] === 'x') {
            return 'invalid';
        }
    }
        return 'nofill';
    };

    return {
        word,
        addToWord,
        removeFromWord,
        validate,
        checkLetterValidity
    };
};

