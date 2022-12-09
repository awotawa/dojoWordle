import { useState } from "react";
import { Word } from "./Game";
import { PossibleLetter } from "./LetterBox";

export const useKeyboard = () => {

    const [word, setWord] = useState<Word>(new Array(6).fill(null));

    const findIndexOfFirstNullValueInWord = (array: Word) => {
        const isNull = (element: PossibleLetter) => element === null;
        return array.findIndex(isNull);
    };

    const addToWord = (letter: PossibleLetter): void => {
        const newWord = [...word];

        const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
        if (indexOfFirstNull === -1) {
            setWord(newWord);
        }
        newWord[indexOfFirstNull] = letter;
        setWord(newWord);
    };

    const removeFromWord = () => {
        const newWord = [...word];

        const indexOfFirstNull = findIndexOfFirstNullValueInWord(newWord);
        if (indexOfFirstNull === -1) {
            newWord[5] = null;
            setWord(newWord);
        }
        if (indexOfFirstNull === 0) {
            setWord(newWord);
        }
        newWord[indexOfFirstNull - 1] = null;
        setWord(newWord);
    };
    return {
        word,
        addToWord,
        removeFromWord
    };
};

