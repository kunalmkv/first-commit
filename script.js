
/*console.log(40 + (3 * 9));
console.log('KUNAL')
let js = 'kunal';
console.log(js) 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark / (heightMark ** 2);
const johnBMI = massJohn / (heightJohn ** 2);
console.log('mark :' + markBMI + ' ' + 'john bmi:' + johnBMI);
console.log(markBMI > johnBMI);

if (markBMI > johnBMI) {
    console.log(`Mark has higher BMI and has value BMI : ${markBMI}`);
}
else
    console.log(`John has higher BMI and has value BMI: ${johnBMI}`);
    */
/*const k = '1992';
console.log(Number(k) + 5);
const s = 'Hello world kunal';
console.log(s.toUpperCase());
console.log(s.split(''));
console.log(s.substring(0, 4));
console.log(s.substring(0, 4).toLowerCase());
const m = 'kunal, loves, coding, and, web developement';
console.log(m.split(', '));
const numbers = new Array('1,2,3,4,5,kunal');
console.log(numbers);
const fruits = ['apples', 'orange', 'mango', 10, 20];
console.log(fruits);
fruits.push('kk', 'mishra');
console.log(fruits);
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits); */

/*const person = {
    firstName: 'John',
    lastName: 'mishra',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: " 50 main street",
        city: 'delhi',
        state: 'gujarat',
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1])
console.log(person.address.city)


const { firstName, lastName, address: { city } } = person;
console.log(city, firstName);
person.email = 'john@gmail.com';
console.log(person);*/

/*const todos = [
    {
        id: 1,
        tas: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        tas: 'Meeting with boss',
        isCompleted: false
    },
    {
        id: 3,
        tas: 'appointment with dentist',
        isCompleted: false
    },
    'kunal'
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
console.log(todos);
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}
todos.forEach(function (todo) {
    console.log(todo.tas);
});*/

/*function temp(num) {
    return num + 273.15;
}

console.log(temp(15));

function temp2(num1, num2) {
    if (num2 == 'celsius')
        return num1 - 273.15;
    else if (num2 == 'kelvin')
        return num1 + 273.15;
    else return 0;
}
console.log(temp2(15, 'kelvin'));*/


function Person(firstName, lastName, dob, roll, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.roll = roll;
    this.sex = sex;
}
const person1 = new Person('Kunal', 'Mishra', '2-4-1999', 122, 'male');
const person2 = new Person('Shivam', 'Prasad', '12-01-1998', 158, 'male');
console.log(person1.dob.getFullYear());

if (person1.dob.getFullYear() < person2.dob.getFullYear()) {
    console.log(` Full name ${person1.firstName}  ${person1.lastName}`);
}
else { console.log(`Full name: ${person2.firstName} ${person2.lastName}`); }

/*function Person(name, age) {
    this.age = age;
    this.name = name;
}

Person.prototype.findeligibility = function findeligibility(minAge) {
    if (this.age > minAge) {
        document.write(this.name + 'is eligible');
    }
    else {
        console.log(this.name + 'is not eligible');
    }

};
const person1 = new Person('kunal', 15);
const person2 = new Person('shivam', 25);

person1.findeligibility(18);
person2.findeligibility(18);*/


/*class Student {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthyear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return '${this.firstName} ${this.lastName}';
    }
} */

/*class User {
    static c = 0;
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        User.c++
    }



    countUsers() {
        console.log(User.c);
    }
    register() {
        console.log(this.username + 'is now registered');
    }
}



class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
        let todaysDate = new Date();
        const membershipactivetillYear = todaysDate.getFullYear();
        const membershipactivetillMonth = todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDate();
        this.membershipactivetillDate = new Date(
            membershipactivetillYear, membershipactivetillMonth + 1, membershipactivetillDay
        );
    }

    renewmembership() {
        const membershipactivetillYear = this.membershipactivetillDate.getFullYear();
        const membershipactivetillMonth = this.membershipactivetillDate.getMonth();
        const membershipactivetillDay = this.membershipactivetillDate.getDate();


        if (this.package == 'Standard') {
            this.membershipactivetillDate = new Date(
                membershipactivetillYear,
                membershipactivetillMonth + 1,
                membershipactivetillDay
            );
        }
        else if (this.package == 'Yearly') {
            this.membershipactivetillDate = new Date(
                membershipactivetillYear + 1,
                membershipactivetillMonth,
                membershipactivetillDay);
        }
    }

    subscriptionActivetill() {
        console.log(this.username + 'is subscribed to' + this.package + 'uptil' + this.membershipactivetillDate);
    }
    getpackage() {
        console.log(this.username + 'is subscribed to' + this.package + 'package');
    }
}
let bob = new User('kunal', 'kunal@gmail.com', '12345');
let shivam = new User('Shivam', 'shivam123@gmail.com', '2344');
let shiva = new User('Shivam', 'shivam123@gmail.com', '2344');
bob.countUsers();
let mike = new Member('mike', 'mike@gmail.com', 123, 'Standard');
let priya = new Member('priyanshu', 'priya123@yahoo.in', 456, 'Yearly');
let karan = new Member('karan', 'karan@gmail.com', 389, 'Yearly')
mike.getpackage();
mike.subscriptionActivetill();*/



