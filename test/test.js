var chai = require('chai');

import { identity, add, pluck } from '../index';

describe("just simple test", function() {

    it("should pass 2", function() {
        chai.expect(identity(2)).to.equal(2);
    });

    it("should add two numbers", function(){
        chai.expect(add(2,3)).to.equal(5);
    });
  
});

describe('pluck method', () => {

    it('should return list of names', () => {

        const characters = [
            { 'name': 'barney', 'age': 36 },
            { 'name': 'fred', 'age': 40 }
        ];

        const expected = ['barney', 'fred'];

        chai.expect(pluck(characters, 'name')).to.deep.equal(expected);
    });

});