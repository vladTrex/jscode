class User {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }

}

class Employee extends User {
    constructor(name){
        super(name);
    }

    sayHi(){
        super.sayHi();
    }
}

export default new Employee('John Doe');
