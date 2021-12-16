'use strict';

/**Parent */
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}


/**Child */
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Student.prototype = Person.prototype;
// Student.prototype.introduce = function() {
//     console.log(`Hi! My name is ${this.firstName}, I study ${this.course}`);
// }
// console.log(Student.prototype);

// const mike = new Student('Mike', 2020, 'CSE');
// mike.calcAge();
// mike.introduce();

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
    console.log(`Hi! My name is ${this.firstName}, I study ${this.course}`);
}
console.log(Student.prototype);

const mike = new Student('Mike', 2020, 'CSE');
mike.calcAge();
mike.introduce();
