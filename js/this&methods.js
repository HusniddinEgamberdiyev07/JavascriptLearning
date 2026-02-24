// -- Methods -- 

let user = {
    name:"Husniddin",
    age:18
}

user.sayHi = function(){
    console.log("Hi");
}

user.sayHi();

// -----

function sayHi2(){
    console.log("Hi");
}

let user2 = {
    name:"Husniddin",
    age:18,
    sayHi:sayHi2,
}

user2.sayHi();

// ----

let user3 = {
    name:"Husniddin",
    age:18,
    sayHi(){
        console.log("Hi");
    }
}

user3.sayHi();

// Accessing objects properties:

// Using variable name

let user4 = {
    name:"Husniddin",
    age:18,
    sayHi(){
        console.log(user4.name);
    }
}

user4.sayHi();

// using this

// this value is object before dot

let user5 = {
    name:"Husniddin",
    age:18,
    sayHi(){
        console.log(this.name);
    }
}

user5.sayHi(); // this value is user5

// if there is no object before dot. this value is undefined (strict mode) or global object

function justThis(){
    console.log(this);
}
justThis();

// Arrow function has no this. It borrows it from others

let arrowFunc = ()=>{
    console.log(this);
}

let user6 = {
    name:"Husniddin",
    func:arrowFunc,
} 
user6.func(); // global object

function funcArrowFunc(){
    let arrow = ()=>{
        console.log(this);
    }
    arrow();
}

let user7 = {
    name:"Husniddin",
    func:funcArrowFunc,
}
user7.func(); // user7

// one function for many objects

function showInfo(){
    console.log(this.content);
}

let  card = {
    name:"name",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores quibusdam laudantium eaque quisquam sequi illum sit voluptas quam culpa ea aliquid dolor non id, amet reiciendis aperiam est beatae.",
}

let msg={
    whom:"Someone",
    content:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
}

card.func = showInfo;
msg.func = showInfo;

card.func();
msg.func();