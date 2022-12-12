import { PossibleLetter } from "./LetterBox";
import { checkWord } from "./useKeyboard"

describe('useKeyboard', ()=>{
    describe('checkWord', ()=>{
        it(`should validate properly when the correct word is 'wordle' and the user input is 'combat'`, () => {
            const userWord = 'combat'.split('') as PossibleLetter[];
            const correctWord = 'wordle';
            expect(checkWord({word: userWord, correctWord})).toEqual(['x', 'o', 'x', 'x', 'x', 'x'])
        })
        it(`should validate properly when the correct word is 'wordle' and the user input is 'wordal'`, () => {
            const userWord = 'wordal'.split('') as PossibleLetter[];
            const correctWord = 'wordle';
            expect(checkWord({word: userWord, correctWord})).toEqual(['o', 'o', 'o', 'o', 'x', '-'])
        })
    })
})