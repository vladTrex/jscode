import chai from 'chai';

import { Publisher, Subscriber } from '../patterns/observer';

describe("Observer Pattern", function () {

    it("should return subscriptions for observable", function () {

        const newYorkTimes = new Publisher('New York Times');
        const losAngelesTimes = new Publisher('Los Angeles Times');

        const alex = new Subscriber('Alex');
        const john = new Subscriber('John');

        newYorkTimes.subscribe(alex);
        newYorkTimes.subscribe(john);

        losAngelesTimes.subscribe(john);

        newYorkTimes.dispatch();
        losAngelesTimes.dispatch();

        const alexExpected = [{ publisherName: 'New York Times' }];
        const johnExpected = [{ publisherName: 'New York Times' },
        { publisherName: 'Los Angeles Times' }];

        chai.expect(alex.subscriptions).to.deep.equal(alexExpected);
        chai.expect(john.subscriptions).to.deep.equal(johnExpected);

    });

});