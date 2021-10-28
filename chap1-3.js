// 28/10/2021
// chapter 1 JS functions

// 1. closures. inner functions. nested functions
function outerFn(x){
    let varInOuterFn = x;
    // define an inner function
    let inner = function(){ // -- using anonymous function
        console.log(" in inner function ... ")
        console.log(varInOuterFn) // access variable from outer scope
    } //-- end of inner scope 
    // for demo purpose. assume another function
    function inner3(){ // -- using normal function
        console.log(" in inner function 3 ... ")
        console.log(varInOuterFn) // access variable from outer scope
    } //-- end of inner scope 
    //return inner // -- return inner function
    // -- for demo, to return both function
    return {inner, inner3} //-- using an object, not a function
}

let inner2 = outerFn("hello 1b06")
// inner2()
//-- demo. if returned is object
inner2.inner3()

// 2. arrow functions - supported in ES6
// demo - normal way
function sum(a,b){
    return a+b
}
console.log(sum(4, 5))
// change to arrow function
let sum2 = (a,b) => {
    return a+b
}
console.log(sum2(5,6))
// can even simplify further
let sum3 = (a,b) => a+b
console.log(sum3(6, 7))


// 3. handling errors in callbacks