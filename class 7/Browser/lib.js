var lib = {}; // Namespace
lib.Car = function () {
    this.name = 'Auto';
    this.now = 3;
    this.info = function(){
        console.log('Car name: '+this.name+', No of Wheels: '+this.now);
    }
}
lib.Car.prototype.getName = function () {
    return this.name;
}

lib.Alto = function () {
    this.name = 'Alto';

    this.brand = function() {
        return 'Maruti';
    }
}
lib.Alto.prototype = new lib.Car();



