// a. Tasks for basics:

// 1. creating empty objects using two ways.
// 2. Read, add, remove properties.
// 3. Read, add, remove multi-word properties.
// 4. Use [] for keywords.
// 5. Use keyword shortcut.
// 6. Explain why taking refrence is not copying.
// 7. Check if variables have same object refrence.
// 8. Clone an object and merge an object.
// 9. Clone nested object.
// 10. Check if object has a key.

// b. Tasks for methods and cloning

// 1. Create a method.
// 2, Access object properties using 2 ways.
// 3. Show all this results.
// 4. Explain what happens when we use this inside an arrow function.
// 5. Create a function for many objects.

// c. Tasks for constructor functions

// 1. Create constructor function
// 2. Create object without this
// 3. Overide this



// a.1

let empty1 = {};
let empty2 = new Object();
let noEmpty = {
  name: "Husniddin",
};

// a.2

empty1.name = "Husniddin"; // add property
empty2.color = "Black";

console.log(empty1, empty2);

console.log(empty1.name); // read
console.log(empty2.color);

empty1.name = "Someone"; // change
empty2.color = "red";

console.log(empty1, empty2);

delete empty1.name; // remove
delete empty2.color;

console.log(empty1, empty2);

// a.3

empty1["can fly"] = true; // add
empty2["can write"] = true;

console.log(empty1, empty2);

console.log(empty1["can fly"]); // read
console.log(empty2["can write"]);

empty1["can fly"] = false; // change
empty2["can write"] = false;

console.log(empty1, empty2);

delete empty1["can fly"]; // remove
delete empty2["can write"];

console.log(empty1, empty2);

// a.4

let keyword = "name";

let user = {
  [keyword]: "Husniddin",
};

user.name = "Someone";

console.log(user[keyword]);

// a.5

let name = "Husniddin";

let admin = {
  name, // name:name
};

console.log(admin);

// a.6

let customer1 = {
  name: "Someone",
};

let customer2 = customer1;

// variables which has value of objects do not store objects they will store refrence to that object.
// Refrence is the address of an object in the memory
// Right now both customer1 and customer2 have the same address and
// If I change one of them it will be shown on both of them

customer1.name = "Husniddin";
console.log(customer2.name);

// a.7

// To check that objects have the same refrence we can use == or ===
// It is true if object have the same refrence otherwise it is false

console.log(customer1 == customer2);
console.log(customer1 === customer2);

// a.8

// To copy an object we can use Object.assign({}, {}, ...)

let customer3 = Object.assign({}, customer1);
console.log(customer3);

// merge
let customer4 = Object.assign(
  customer3,
  { name: "Someone", age: 18 },
  { "can fly": true },
);
console.log(customer4);

// a.9

// Object.assign cannot clone nested objects.
// To do that we structuredClone

userNested = {
  name: "Husniddin",
  address: {
    street: 144,
  },
};

userNested2 = structuredClone(userNested)

console.log(userNested.address === userNested2.address);

// a.10

let num ={
    decimalPlaces:10
}
console.log("decimalPlaces" in num);



// b.1

console.log("\n\n");


function sayHi(){
    console.log("Hi user1");
}

let user1 = {
    name:"Husniddin",
    func:sayHi
}

let user2 = {
    name:"Husniddin",
}

user2.func = function(){
    console.log("Hi user2");
}

let user3 = {
    name:"Husniddin",
    func:function(){
        console.log("Hi user3");
    }
}

let user4 = {
    name:"Husniddin",
    func(){
        console.log("Hi user4");
    }
}

user1.func();
user2.func();
user3.func();
user4.func();

// b.2

// 1) using var name

let article = {
    title:"Something",
    showTitle(){
        console.log(article.title);
    }
}

article.showTitle();

// 2) using this

let article2 = {
    title:"Something",
    showTitle(){
        console.log(this.title);
    }
}

article2.showTitle();

// b.3

// this value is an object before dot
// if there is no object before dot it will be undefined(strict mode) or global object

function func(){
    console.log(this);
}

func() // no object before dot so it is undefined or global object

let message = {
    msg:"Something",
    showMsg(){
        console.log(this.msg);
    }
}

message.showMsg(); // message is before dot so this is message

// b.4

// arrow function does not have this.
// It borrows it.

let arrowObj = {
    something:"something",
    showSomething:()=>{
        console.log(this);
    }
}
arrowObj.showSomething(); // global object or undefined

let arrowObj2 = {
    something:"something",
    showSomething(){
        let arrow = ()=>{
            console.log(this);
        }
        arrow()
    }
}
arrowObj2.showSomething(); // this is arrowObj2 arrow function borrowed this

// b.5

function move(){
    console.log(this.move_type);
}

let car = {
    move_type:"car is moving",
    func:move
}

let boat = {
    move_type:"boat is sailing",
    func:move
}

car.func();
boat.func();
