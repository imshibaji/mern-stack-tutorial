class A{
    // constructor(){
    //     if(this.instance){
    //         // throw new Error("Instance Created");
    //         console.log("Instance Created");
    //     }else{
    //         this.instance = this;
    //     }
    // }

    static getInstance(){
        if(this.instance){
            console.log("Instance Created");
        }else{
            this.instance = this;
        }
        return this.instance;
    }
    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }
    decrement(){
        return --counter;
    }
}

// const a = new A();
// const a1 = new A();
// a.increment();
// a.getCount();
// console.log(a.getCount());
// console.log(a1.getCount());

const a = A.getInstance();
const a1 = A.getInstance();

// == equal
// === strict equal
console.log(a === a1);