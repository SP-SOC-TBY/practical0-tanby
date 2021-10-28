// include this module fs. so that i can read/write to the filesystem. 
// with great power comes great responsibility - Spiderman uncle
const fs = require('fs')

// demo to help in pract 1
// doc - https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
let content = fs.readFileSync("file.txt", "utf8")
// sync = synchronous = code will pause/wait until operation complete
console.log(content)

fs.readFile(
    "file.txt", //-- location of file to read
    // we using arrow function 
    (err, data) => { //-- callback when file read, includes error and the data read
        // handle error
        if(err !== null){ // got error
            // print error out so that i can read and troubleshoot
            console.log(err)
        }else{ // no error
            // print out data from file
            console.log(data)
        }
})