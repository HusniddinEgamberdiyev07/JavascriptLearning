// primitive data type can contain only single value.

// You can create object usinbg {}
// You can put properties inside {}
// Property is key:value

let user = {
    name:"Husniddin",
    surname:"Egamberdiyev",
    age:18,
};

// You can create empty object using two ways:

// 1) {}

let empty = {};

// 2) new Object()

let empty2 = new Object();

// We can add, remove, read properties

// We can get property value using dot.

console.log(user.name);

// To delete property use delete operator

delete user.surname;
console.log(user);

// Adding new propery obj.keyname = "value"
user.role = "Student";
console.log(user);

// We can have multi-word key names but they must be in ""

// adding

user["last name"] = "Egamberdiyev";

// accessing
console.log(user["last name"]);

// removing
delete user["last name"];
console.log(user);

// We can put variables inside []

let fruit = "apple"
let weight = "weight"

let bag = {
    [fruit]:2
}

console.log(bag);

bag[weight] = "2kg";

console.log(bag);

let name = "Husniddin";

let user3 = {
    name:name
}

console.log(user3);

let user4 = {
    name
}

console.log(user4);

// no limit to name keys

let no_limit = {
    let:"variable",
    for:"loop"
}
console.log(no_limit);

console.log("name" in user);        // user has name propery
console.log("nonsense" in user);    // false

for (key in user){
    console.log(user[key]);
}

let user5 = {
    name:"Husniddin"
}

let admin = user5   // we did not copy user5 but we took the refrence of the ,e,ory location
// If I change user5 it will be changed on admin too
user5.name = "Dunno"
console.log(admin);

// Checking they have the same refrence
console.log(admin === user5);   // true

let obj1 = {};
let obj2 = {};

console.log(obj1 === obj2);     // false

// cloning or merging objects

let obj3 = {
    name:"chair"
}

let obj4 = Object.assign({}, obj3);
console.log(obj3 === obj4);
console.log(obj4);

// Nested cloning

let obj_nested = {
    user:{
        name:"Husniddin"
    }
}

let cloned_nested = structuredClone(obj_nested);
cloned_nested.user.name = "dunno";

console.log(obj_nested);
console.log(cloned_nested);