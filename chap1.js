function m1(a, b){
    // does not return any value. 
    // just do and forget
    console.log(a+b)
}

// to call function
m1()
// return NaN. not a number

m1(10)
// same same not a number

m1(1,2)

console.log(m1(1,2))

// 2nd way. anonymous function
let m2 = function(){
    return "anonymous"
}

// call it by the name or variable pointing to it
console.log(m2())

// assign m1 to another variable
let m3 = m1;
// you can now call it using the new variable
m3(3,2)

// use setInterval with anonymous function
var count = 10;
// var intervalID = setInterval(function(){
//     console.log("running tired... " + count--)
//     if(count <= 0){
//         // stop this from running
//         clearInterval(intervalID)
//     }
// }, 1000);

let m4 = function(){
    console.log("i am m4!!!")
}
// another way but cleaner
setInterval(m4, 1000);


