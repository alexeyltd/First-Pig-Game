// First lecture - variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture - variables 2
/*
var name = 'John';
var age = 26;

console.log(name + ' ' +  age);

var job, isMarried;

console.log(job);

job = 'teacher';

isMarried = false;

console.log(name + ' is a ' + isMarried);

var lastName = prompt('What is it ?');
console.log(lastName);

alert(name + ' is a ' + isMarried);
*/

//Lecture - operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageMark *= 2;

ageJohn++;

ageJohn = ageMark = (3 + 5) * 4 - 6;
console.log(ageJohn);
*/

//Lecture - if/else
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(23 == '23') {
    console.log(name + ' is married');
} else {
    console.log(name + ' will hopefully marry soon');
}
*/

//Lecture - logic / switch
/*
var age = 25;

if (age < 20) {
    console.log('John is a teenager');
} else if (age > 20 && age < 30) {
    console.log('young');
} else {
    console.log('John is a man');
}

var job = 'teacher';

switch(job) {
    case 'teacher':
        break;
    case 'driver' :
        break;
    default:
        console.log('efe');
}
*/
//Challenge
/*
var heightJohn = 85;
var heigthSam = 70;
var ageJohn = 30;
var ageSam = 20;

var scoresJohn = heightJohn * ageJohn;
var scoresSam = heigthSam * ageSam;

if (scoresJohn > scoresSam) {
    console.log('Johm win');
} else if (scoresJohn === scoresSam) {
    console.log('Nobody win')
} else {
    console.log('Sam win');
}
*/

//Lecture - function
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

console.log(calculateAge(40));
*/

//Lecture - statements / expressions
/*
// expression - store 
var someFun = function() {
    
};
*/

//Lecture - arrays
/*
var names = ['John', 'Jana'];
var years = new Array(1990, 1969, 1958);

console.log(names[0]);

var johm = ['John', 1990, 'teacher', false];

johm.push('blue');
johm.unshift('Mr.');
johm.pop();
johm.shift();
if (johm.indexOf('teacher') > 0) {
    console.log('John is a teacher');
}


console.log(johm);
*/

//Lecture - objects
/*
var john = {
  
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
    
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';

var jane = new Object();

jane.name = 'Jane';
*/

//Lecture 2 - objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
       //return 2016 - this.yearOfBirth; 
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();

console.log(john);
*/
/*
//Lecture - loops

//for (let i = 0; i < 10; i++) {
//    console.log(i);
//}

var names = ['John', 'Jane'];

//for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

while(i < names.length) {
    
}
*/

// Challenge - 2
/*
var years = [1990, 2016, 2523, 234123];
var array = [];

for (let i = 0; i < years.length; i++) {
    array[i] = years[i];
};


console.log(array);

for (let i = 0; i < array.length; i++) {
    if ((2017 - array[i]) >= 18) {
        console.log(array[i]);
    }
};

function printFullAge(array) {
    for (let i = 0; i < array.length; i++) {
        if ((2017 - array[i]) >= 18) {
            array[i] = true;
        } else {
            array[i] = false;
        }
    };
    console.log(array);
};

printFullAge([1965, 2008, 1992]);
*/
















