const accountId = 144321
//const is like tuple i.e immutable

let accountEmail="ayush@gmail.com"   
var accountPassword="12345"
/*
    prefer not use var in js 
    because of issues in block scope&functional scope

    use either let or const only
*/

accountCity="Jaipur"
//nott a good practice to not use any data type
//but js is realy safe langue so it works

let accountState;
//initializing the variable without assigning data

// accountId=3
//will give error beacuse it is const i.e immutable

accountEmail="shobha@gmail.com"
accountPassword="2213187"
accountCity="Patna"

console.log([accountId]);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);