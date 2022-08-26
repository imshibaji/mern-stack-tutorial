// Array
var names = ['Joy', 'Bijoy', 'Madhu', 'Sumit', 'Arafat', 'Lisa', 'Dipta'];

function letter(name){
    return 'Hi '+name+', I hope you are doing well. I thought you are enjoying the class sesion. Please give me valuable feedback. Regards, Shibaji Debnath';
}

// for (let index = 0; index < names.length; index++) {
//     const message = letter(names[index]);
//     console.log(message);
// }

// for (const index in names) {
//     const message = letter(names[index]);
//     console.log(message);
// }


// // ES5 Codes
// names.forEach(function(name) {
//     const message = letter(name);
//     console.log(message);
// });

// // ES6 Codes
// names.forEach((name) => {
//     const message = letter(name);
//     console.log(message);
// });

// for (const name of names) {
//     const message = letter(name);
//     console.log(message);
// }