import {describe, expect, it} from '@jest/globals';
import {soma, subtracao} from './calculadora';

describe('Teste da calculadora', () => {
    it('10 + 10 deve retornar 20', () => {
        expect(soma(10, 10)).toBe(20);
    })

    it('10 + 10 deve retornar 0', () => {
        expect(subtracao(10, 10)).toBe(0);
    })
})