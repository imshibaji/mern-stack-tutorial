// Array
var names = ['Joy', 'Bijoy', 'Madhu', 'Sumit', 'Arafat', 'Lisa', 'Dipta'];

function letter(name){
    return 'Hi '+name+', I hope you are doing well. I thought you are enjoying the class sesion. Please give me valuable feedback. Regards, Shibaji Debnath';
}

function welcome(){
    out('Welcome to MERN Stack Course')
}
function out(message){
    console.log(message);
}

function printer(values){
    values.forEach(element => {
        const composedLetter = letter(element);
        out(composedLetter);
    });
}

welcome();
out('Hello Students!');
out('========================================');
printer(names);
