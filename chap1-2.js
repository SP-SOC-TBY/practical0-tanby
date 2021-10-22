console.log("chapter 1 running")

// create a listener. which uses function
// trap click event, and run anonymous function
document.getElementById("button1").addEventListener(
    "click", // -- this is the event type
    function(){ // -- this is the anonymous function
        console.log("clicked")
    }
)

function m6(){
    console.log("m6 running")
    setTimeout(
        function(){
            console.log("time out!")
        }, 
        3000 // 3 seconds
    )
}

function m5(){
    console.log("m5 running")
}
// call m6
m6()
// call m5
m5()