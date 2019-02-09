import chai from 'chai';

import {calculateFibonacci} from '../recursion/fibonacci';
import {factorialIterative, factorialRecursive} from '../recursion/factorial';

describe('recursion functions', () => {
    describe('calculate fibonacci', () => {
        it('should return fibonacci sum of number ', () => {
            chai.expect(calculateFibonacci(15)).to.equal(610);
        });
    });

    describe('factorial functions', () => {
        it('should return factiorial of number by iterative method', () => {
            chai.expect(factorialIterative(5)).to.equal(120);
        });

        it('should return factiorial of number by recursive method', () => {
            chai.expect(factorialRecursive(5)).to.equal(120);
        });
    });
})