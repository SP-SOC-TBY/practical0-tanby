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

// function maxNumbers(numbers)
//   create variable, max to store 1st number in array
//   LOOP from 1 to array length -1
//     IF current number in array greater than max THEN
//        store current number in max
//   RETURN max

// Q3
// Function multiplicationTable(numbers)
//   create array, output to store results
//   LOOP (row) from 1 to n
//      create array, r, to store numbers in row
//      LOOP (column) from 1 to n
//         add (column x row) to r
//      add r to output
//   RETURN output

// Q4
// function calculateMean(numbers)
//   create variable, total set to zero
//   LOOP from 0 to array length -1
//     total = total + current number
//   RETURN total / array length

// Q5 
// Function fib(n)
//   IF n is zero THEN return zero
//   ELSE IF n is one THEN return one
//   ELSE return fib(n-1) + fib(n-2)

// Q6 

// Q7
