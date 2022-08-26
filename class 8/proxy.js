const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
};
const person1 = [
    {
        name: "John Doe",
        age: 42,
        nationality: "American"
    },
    {
        name: "John Doe",
        age: 42,
        nationality: "American"
    }
];
const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
});

// Proxy 
personProxy.name;
personProxy.age = 43;
personProxy.nationality="India";


console.log(person.age);
