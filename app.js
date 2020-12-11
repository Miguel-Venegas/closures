// Understanding Closures Part 1

function greet(whatToSay){
    return function(name){
        console.log(whatToSay + ' ' + name);
    }
}

greet('Hi'); // this returns a function 

greet('Hi')('Miguel'); // this invokes the function that was returned and passes in the arguments 'Hi' & 'Tony'



// to really understand what is going on, we are going to set this to a variable like so:

// again this is set equal to the result of the greet function, which is the internal anonymous function

let sayHi = greet('Hi'); 

// Now you can invoke sayHi() because it is set equal to a function expression like so:

sayHi('Miguel'); // this outputs a string: Hi Miguel

// Explanation: If you notice, the sayHi function properly inserts the value of 'Hi' into the whatToSay variable. How is this possible? Short answer: because of closures. The inner function still has a reference to its outer environment, even after the greet function has finished executing. In other words, the inner function closes in on all the variables its supposed to have access to, i.e., closure. 


// understanding closures Part 2

// most common example on closures

// in this example, we are pushing 3 functions into the 'arr' array

function buildFunctions(){
    let arr = [];

    for(let i = 0; i < 3; i++){
        arr.push(
           function(){
               console.log(i);
           } 
        )
    }
    return arr;
}

let functionsArray = buildFunctions(); // here we setting a variable to the the returned array.

functionsArray[0](); // here we are calling the first item of the array 
functionsArray[1]();
functionsArray[2]();

// what is the output of all three invoked functionArrays? The answer is: 0, 1, 2





// ----------------------------------------------------------------------

// it is also possible to get the same result using the 'var' keyword
// to do so, you would need to use an immediately invoked function expression (IIFE)

function buildFunctions2(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(
            // IIFE
            (function(j){
                return function(){
                    console.log(j);
                } 
            }(i))
        )
    }
    return arr;
}

var functionsArray2 = buildFunctions2(); // here we setting a variable to the the returned array.

functionsArray2[0](); // here we are calling the first item of the array 
functionsArray2[1]();
functionsArray2[2]();
