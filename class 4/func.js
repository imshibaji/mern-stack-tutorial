// Normal Function
// - void function
// - Return Type Function

// Spacial Function
// - callback function
// - promise function
// - Contructor Type Function


// Void Function / Non-Return Type
function welcome(){
    out('Welcome to MERN Stack Course')
}
function out(message) {
    console.log(message);
}

welcome();
out('Hello Students!');

// Return Type function
function hi(name) {
    return 'Hi '+ name+'! I think you are well.';
}

// var msg = hi('Arafat');
// out(msg);

// out(hi('Lisa'));




// Spacial Function
// Callback Function
// Developer Creation
function composer(name, callback) {
    var greet = 'Hi '+ name+'! I think you are well.';
    console.log(greet);
    if(typeof callback == 'function'){
        callback(greet);
    }
}
// Usages
composer('Arafat');



// Userbased Function
function message(name){
    console.log('Hi ' + name);
}

