export class Publisher {

    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    dispatch() {
        this.subscribers.forEach(observer => observer.notify(this.name));
    }

}

export class Subscriber {
    constructor(name){
        this.name = name;
        this.subscriptions = [];
    }

    notify(publisherName) {
        this.subscriptions.push({ publisherName });
    }
}