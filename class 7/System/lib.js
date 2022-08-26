// class Car {
//     name = 'Auto';
//     now = 3;
//     info(){
//         console.log('Car name: '+this.name+', No of Wheels: '+this.now);
//     }
// }
var Car = function () {
    this.name = 'Auto';
    this.now = 3;
    this.info = function(){
        console.log('Car name: '+this.name+', No of Wheels: '+this.now);
    }
}
module.exports = Car;