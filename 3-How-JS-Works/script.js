///////////////////////////////////////
// Lecture: Hoisting
/*
calculate(1995);

function calculate(year) {
    console.log(2016 - year);
};

//retirement(1990);
var retirement = function(year) {
    console.log(65 - (2016 - year));
};

//variables
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/










///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    };
};

function third() {
    var d = 'John';
    console.log(a + d);
};
third();
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
};

var john = {
    name : 'John',
    yearOfBirth: 1990,
    calculate: function(year) {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        };
        innerFunction();
        
    }
};

john.calculate();

var mike = {
  
    name : 'Mike',
    yearOfBirth: 1984
};

mike.calculate = john.calculate;

mike.calculate();
*/




