import chai from 'chai';

import { identity, pluck, getSlug } from '..';

describe("functional tests", function() {

    it("should return agrument by unari function", function() {
        chai.expect(identity(2)).to.equal(2);
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

describe('slug method', () => {
    it('should return acceptable slug string', () => {

        const expected = 'some-piece-of-text';

        chai.expect(getSlug('Some piece of text')).to.equal(expected);

    });
});
