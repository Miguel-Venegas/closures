// Understanding Closures

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

