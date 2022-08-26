// variables + operators // var, let, const (=, ==, != , <, >)
// conditions // if, if else, if elseif else, switch .. case, ?:, ||
// loops
// array
// function

// Condition
var fair = 50;
if(fair>20){
    console.log('You can travel with bus');
}
else if(fair>10){
    console.log('You can travel with rikshaw');
}else{
    console.log('You Prefar walk');
}
// Turnary Operator
var message = (fair>20)? 'You can travel with bus': (fair>10)? 'You can travel with rikshaw' : 'You Prefar walk';
console.log('Travel Mode: '+message);



// Switch ... case
var role = 'admin';
switch (role) {
    case 'admin':
        console.log('You have admin permission');
        break;

    case 'manager':
        console.log('You have manager permission');
        break;

    case 'user':
        console.log('You have user permission');
        break;

    default:
        console.log('You have no permission');
        break;
}

var classDay = 'FRI';
switch (classDay.toLowerCase()) {
    case 'wed':
    case 'fri':
        console.log(classDay+' is a class day');
        break;

    default:
        console.log(classDay+ ' is Non class day');
        break;
}

// Loops
// While
var level = 1;
while (level<1) {
    console.log('Lavel '+level);
    level = level + 1;
}

var level = 1;
do{
    console.log('Lavel 2: '+level);
    level = level + 1;
}while (level<1)


for(var lavel = 1; level<10; level++){
    console.log('Lavel 3: '+ level);
}



