var lib2 = {}; // Namespace
lib2.Car = function() {
    this.name = 'Taxi';
    this.now = 4;
    this.info = function(){
        console.log('Car name: '+this.name+', No of Wheels: '+this.now);
    }
}