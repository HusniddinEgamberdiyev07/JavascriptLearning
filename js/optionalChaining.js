let user = {};

// console.log(user.address.street);   // error

// To fix this we have 2 options

// 1) Using conditions

console.log(user.address ? user.address.street : undefined);

// 2) optional chaining

// value?.property

// if value exists it is value.property
// else it is undefiend

console.log(user?.address?.street);

let user2 = {
  address: "somewhere",
};

console.log(user2?.address);
console.log(user2?.address?.street);

let userAdmin = {
  name: "Husniddin",
  admin() {
    console.log("I am an admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.();

let key = "name";

console.log(userAdmin?.[key]);
console.log(userGuest?.[key]);

// obj?.prop retruns obj.prop or undefined
// obj.func?.() returns obj.func() or undefined
// obj?.[key] returns obj[key] or undefined
