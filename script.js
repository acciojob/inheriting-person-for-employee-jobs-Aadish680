// complete this js code

class Person {
    constructor(name, age) {
        this.n = name;
        this.a = age;
    }

    greet() {
        return `Hello, my name is ${this.n}, I am ${this.a} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.job = jobTitle;
    }

    jobGreet() {
        return`Hello, my name is ${this.n}, I am ${this.a} years old, and my job title is ${this.job}`;
    }
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
