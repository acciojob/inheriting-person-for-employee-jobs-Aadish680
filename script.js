// complete this js code

class Person {
    constructor(name, age) {
        this.n = name;
        this.a = age;
    }

    greet() {
        return `Hello, my name is ${this.n} and I am ${this.a} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.job = jobTitle;
    }

    jobGreet() {
        return`Hello, my name is ${this.n} and I am ${this.a} years old, and my job title is ${this.job}`;
    }
}

const person = new Person("Alice", 25);
person.greet(); 

const employee = new Employee("Bob", 24, "General Manager");
employee.jobGreet();


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
