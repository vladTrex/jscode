import chai from 'chai';

import { reverseInt } from '../reversal';

describe('reversal section', () => {

    it('should return reversed integer', () => {
        chai.expect(reverseInt(51)).to.equal(15);
    });

    it('should return negative reversed integer', () => {
        chai.expect(reverseInt(-51)).to.equal(-15);
    });

});