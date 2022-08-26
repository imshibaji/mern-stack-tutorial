// Object Oriented Programming
// 1 class
// 2 object / instance
// 3 Inheritance
// 4 Polymorphysm
// 5 Encapsolution

// window / document browser e run kore
//  global nodejs e run kore

// Class Declaration / Creation
class Chair{
    constructor(color, legs, seat, handle){
        this.color = color || 'Black';
        this.legs = legs || 2;
        this.seat = seat || 1;
        this.handle = handle || 2;
    }

    canSeat(){
        console.log('You can seat here');
    }
    canStand(){
        console.log('You can Stands here');
    }

    info(){
        console.log('Color: '+this.color+', Legs: '+this.legs+', Seat Num: '+this.seat+', Handle: '+this.handle);
    }
}

// Class Object
// Chair 1
const chair1 = new Chair();
chair1.color= 'Red';
chair1.legs = 3;
chair1.canSeat();
chair1.info();

// Chair 2
const chair2 = new Chair();
chair2.info();

// Chair 3
const shofa = new Chair('Blue', 2, 3, 2);
shofa.info();
