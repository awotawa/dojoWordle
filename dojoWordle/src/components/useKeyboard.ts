import _ from "lodash";
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
    const [attempts, setAttempt] = useState<Word[]>([[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]]);
    const [attemptIndex, setAttemptIndex] = useState<number>(0);
    

    const addToWord = (letter: PossibleLetter): void => {
        if(attemptIndex < 5){
            setAttempt(attempts => {
                const newAttempt = _.cloneDeep(attempts);
                const indexOfFirstNull = findIndexOfFirstNullValueInWord(newAttempt[attemptIndex]);
                if (indexOfFirstNull === -1) {
                    return newAttempt;
                }
                newAttempt[attemptIndex][indexOfFirstNull] = letter;
                return newAttempt;
            })
        }

    };

    const removeFromWord = () => {
        if(attemptIndex < 5){
            setAttempt(attempts => {
                const newAttempt = [...attempts];
                const newWord = newAttempt[attemptIndex]
                const indexOfFirstNull = findIndexOfFirstNullValueInWord(newAttempt[attemptIndex]);
                if (indexOfFirstNull === -1) {
                    newAttempt[attemptIndex][newAttempt[attemptIndex].length - 1] = null;
                    return newAttempt;
                }
                if (indexOfFirstNull === 0) {
                    return newAttempt;
                }
                newAttempt[attemptIndex][indexOfFirstNull - 1] = null;
                return newAttempt;
            })
        }
    };

    const validate = () => {
        if(attemptIndex < 5){
            const indexOfFirstNull = findIndexOfFirstNullValueInWord(attempts[attemptIndex]);
            if (indexOfFirstNull === -1){
                setAttemptIndex(attemptIndex => attemptIndex + 1)
            }
        }
    }

    type checkLetterValidityProps = {
        index: number;
        indexOfAttempt: number;
    };

    const checkLetterValidity = ({
    index,
    indexOfAttempt
    }: checkLetterValidityProps): Validity => {
        const word = attempts[indexOfAttempt];
        const checkedWord = checkWord({word, correctWord});
        const indexOfFirstNull = findIndexOfFirstNullValueInWord(word);
        if (indexOfFirstNull === -1 && indexOfAttempt < attemptIndex) {
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
        attempts,
        addToWord,
        removeFromWord,
        validate,
        checkWord,
        checkLetterValidity
    };
};

