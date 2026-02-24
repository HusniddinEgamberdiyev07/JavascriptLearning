// Often we need to create similar objects.
// We can do it using constructor functions.
// They are like regular functions but they have 2 things which are different than regular ones.

// 1. We use capital letter to name them.
// 2. We call them using new operator.

function User(name, age){

    // this = {};

    // add properties to this
    this.name = name;
    this.age = 18;

    this.sayHi = function(){
        console.log("Hi "+this.name);
    }

    // return this;
}

let user1 = new User("husniddin", 18);
user1.sayHi();

console.log(user1);

// create objects without new.

function UserWithoutNew(name){
    if(!new.target){
        return new UserWithoutNew(name);
    }
        
    this.name = name
}

let userWithoutNew1 = UserWithoutNew("Someone");
console.log(userWithoutNew1);

// return overides this.

function OverideThis(){
    this.name = "John";

    return {
        name:"Someone"
    }
}
let overide1 =new OverideThis();
console.log(overide1);
