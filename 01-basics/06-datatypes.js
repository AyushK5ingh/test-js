//primitive

// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
//these are call by value
const score =100;
// const score1:number = 100
//only typesccript

const id=Symbol('123');
const anotherId=Symbol('123');
console.log (id==anotherId);

const scard=null;
//will give type of as object not null
const bigNum = 12345669874n;
//add n in the end for bigint

//no need to define data type.(js is dynamicaly typed)
//we can define but it just makes the code safer only



//Refernce type(Non Primitve)

//Array, Objects, Functions

const heros=["shaktiman","ayus","john"];
let myobj={
    name: "ayush",
    age:23,
}
//let myobj is not needed

const myFunction=function(){
    console.log("hey");
}
console.log(typeof bigNum)

// https://262.ecma-international.org/5.1/#sec-11.4.3