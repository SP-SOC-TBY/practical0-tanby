// Question 1 - function bigBus(n)
// yea. added code. 
// create variable called a
let a = 96;
console.log(a)

// const - constant. will not change
const n = 15;
console.log(bigBus(n))

// function with name bigBus and parameter abc
function bigBus(abc){
    // create an array as output
    let output = []
    // loop from 1 to abc
    for(let i=1; i<=abc; i++){
        // each time check if multiples of 3, 5, 15
        //  if number is multiple of 15 then "BigBus"
        // 15 goes first because it is a multiple of 3 and 5.
        if(i%15 == 0){
            output.push("BigBus")
        }
        //  if number is multiple of 3 then "Big"
        else if(i%3 == 0){
            output.push("Big")
        }
        //  if number is multiple of 5 then "Bus"
        else if(i%5 == 0){
            output.push("Bus")
        }
        // else do nothing, just use the number
        else{
            output.push(String(i))
            //output.push(i.toString())
            //output.push(i+"")
        }
        
    }
    // return the output
    return output
}

// Q2

// Q3

// Q4

// Q5 

// Q6 

// Q7
