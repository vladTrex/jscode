import chai from 'chai';

import {calculateFibonacci} from '../recursion/fibonacci';
import {factorialIterative} from '../recursion/factorial';

describe('recursion functions', () => {
    describe('calculate fibonacci', () => {
        it('should return fibonacci sum of number ', () => {
            chai.expect(calculateFibonacci(15)).to.equal(610);
        });
    });

    describe('factorial functions', () => {
        it('should return factiorial of number', () => {
            chai.expect(factorialIterative(5)).to.equal(120);
        });
    });
})