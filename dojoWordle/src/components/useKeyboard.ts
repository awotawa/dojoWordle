import { useState } from "react";
import { Word } from "./Game";
import { PossibleLetter } from "./LetterBox";

export const findIndexOfFirstNullValueInWord = (array: Word) => {
    const isNull = (element: PossibleLetter) => element === null;
    return array.findIndex(isNull);
};

    const [word, setWord] = useState<Word>(new Array(6).fill(null));

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
        setChecking(false)
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
        setWord(newWord);
    };
    return {
        word,
        addToWord,
        removeFromWord
    };
};

