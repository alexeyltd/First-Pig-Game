//Lesson 1
//Function constructor
/*
var john = {
  
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
    
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
        console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.teacher = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

//Primitives vs. objects
/*
//Primitives
var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);

//Objects
var obj1 = {
    name: 'John',
    age = 26
};

var obj2 = obj1;
*/


//Function - objects
/*
var years = [1990, 1965, 1938, 1230, 2341];

function arrayCalc(arr, fn) {
    
    var arrRes = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        arrRes.push(fn(i));
        
    }
    
    return arrRes;
    
};

function calculateAge(el) {
    
    return 2016 - el;
    
};

function isFullAge(el) {
    
    return el >= 18;
    
};

function maxHeartRate(el) {
    
    return Math.round(206.9 - (0.67 * el));
    
}

console.log(arrayCalc(years, maxHeartRate));
*/

//Returning functions
/*
function interviewQuestion(job) {
    
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name)
        };
    }
    
};

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');
*/

//IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
   var score = Math.random() * 10;
    console.log(score >= 5); 
})();

(function(goodLuck) {
   var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck); 
})(5);
*/

//Closures
/*
function retirement(retirementAge) {
    var a = ' years left until retirenment';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);

retirementUS(1990);
retirement(66)(1990);
*/

//BIND, CALL, APPLY
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('I\'m ' + this.name);
        } else if (style === 'friednly') {
            console.log('Hey! ' + this.name);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//john.presentation('formal','morning');

john.presentation.call(emily, 'friednly', 'afternoon');

//john.presentation.apply(emily, ['friendly, 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'formal');

johnFriendly('morning');
*/

//
/*
(function() {
   function Question(question, answers, correct) {

    this.question = question;
    this.answers = answers;
    this.correct = correct;

    };

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (let i = 0; i < this.answers.length; i++) {
            console.log(i + ' ' + this.answers[i]);
        }
    };

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if (ans === this.correct) {
            console.log('correct answer');
            sc = callback(true);
        } else {
            console.log('ERROR');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    };
    
    Question.prototype.displayScore = function(score) {
        
        console.log('Score is ' + score);
        
        
    }

    var q1 = new Question('Hey there ?!', ['yes', 'no'], 0);

    var q2 = new Question('Name there ?!', ['Alexey', 'Pavlues'], 0);

    var q3 = new Question('Coding >?', ['fun', 'hard'], 0);
    
    var questions = [q1,q2,q3];
    
    function score() {
        var sc = 0;
        
        return function(correct) {
            if (correct) {
                sc++;
            } 
            return sc;
        }
         
    };
    
    var keepScore = score();

    function nextQuestion() {
        var randomIndex = Math.floor(Math.random() * questions.length);

        questions[randomIndex].displayQuestion();

        var answer = prompt('Please !');
        
        if  (answer !== 'exit') {
            questions[randomIndex].checkAnswer(parseInt(answer), keepScore); 
            
            nextQuestion();
        }
        
        
    };
    
    nextQuestion();
   
})();
*/





