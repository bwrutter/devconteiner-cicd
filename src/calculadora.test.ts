import {describe, expect, it} from '@jest/globals';
import {soma} from './calculadora';

describe('Teste da calculadora', () => {
    it('10 + 10 deve retornar 20', () => {
        expect(soma(10, 10)).toBe(20);
    })
})