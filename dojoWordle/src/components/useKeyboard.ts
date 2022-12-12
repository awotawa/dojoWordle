import { useState } from "react";
import { Word } from "./Game";
import { Letter, PossibleLetter, Validity } from "./LetterBox";

export const findIndexOfFirstNullValueInWord = (array: Word) => {
    const isNull = (element: PossibleLetter) => element === null;
    return array.findIndex(isNull);
};

type CheckWordProps = {
    word: PossibleLetter[],
    correctWord: string
}
type Validation = 'x' | 'o' | '-';

export const checkWord = ({word, correctWord}: CheckWordProps): Validation[] => {

        const numberOfLettersFromCorrectWord = new Map<Letter, number>();
        
        const arrayCorrectWord = correctWord.split('') as Letter[];

        for(let letter of arrayCorrectWord){
            if (numberOfLettersFromCorrectWord.has(letter) === true){
                numberOfLettersFromCorrectWord.set(letter, numberOfLettersFromCorrectWord.get(letter)! + 1);
            }
            if (numberOfLettersFromCorrectWord.has(letter) === false){
                numberOfLettersFromCorrectWord.set(letter, 1);
            }
        }

        const intermediateCheckedWord: Validation[] = []
        word.forEach((letter, index) => {
            if(letter !== null){
                if(letter === arrayCorrectWord[index]){
                    intermediateCheckedWord.push('o');
                    numberOfLettersFromCorrectWord.set(letter, numberOfLettersFromCorrectWord.get(letter)! - 1);
                }
                if(letter !== arrayCorrectWord[index]){
                    intermediateCheckedWord.push('x');
                }
            }
        });
        const checkedWord: Validation[] = []
        intermediateCheckedWord.forEach((validationSign, index)=> {
            if(validationSign === 'o'){
                checkedWord.push(validationSign);
            }
            if(validationSign === 'x'){
                if(numberOfLettersFromCorrectWord.has(word[index] as Letter) !== true || numberOfLettersFromCorrectWord.get(word[index] as Letter)! === 0){
                    checkedWord.push(validationSign);
                }
                if(numberOfLettersFromCorrectWord.has(word[index] as Letter) === true && numberOfLettersFromCorrectWord.get(word[index] as Letter)! > 0){
                    numberOfLettersFromCorrectWord.set(word[index] as Letter, numberOfLettersFromCorrectWord.get(word[index] as Letter)! - 1);
                    checkedWord.push('-');
                }
            }
        });
        return checkedWord
    }

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
    };

    const validate = () => {
        const indexOfFirstNull = findIndexOfFirstNullValueInWord(word);
        if (indexOfFirstNull === -1){
            setChecking(true)
        }
    }

    type checkLetterValidityProps = {
        index: number;
    };

    const checkLetterValidity = ({
    index,
    }: checkLetterValidityProps): Validity => {
    const checkedWord = checkWord({word, correctWord});
    const indexOfFirstNull = findIndexOfFirstNullValueInWord(word);
    if (indexOfFirstNull === -1 && checking) {
        if (checkedWord[index] === 'o') {
            return 'valid';
        }
        if (checkedWord[index] === 'x') {
            return 'invalid';
        }
        if (checkedWord[index] === '-') {
            return 'misplaced';
        }
    }
        return 'nofill';
    };

    return {
        word,
        addToWord,
        removeFromWord,
        validate,
        checkWord,
        checkLetterValidity
    };
};

