import chai from 'chai';    

import user from '../oop';

describe('OOP patterns',  () => {

    it('should return child instance of user', () => {

        const expected = {name: 'John Doe'};

        chai.expect(user).to.deep.equal(expected);

    });

});
