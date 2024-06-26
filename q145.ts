//Create a function that accepts a callback and invokes it with some arguments.

// This function accepts a callback function and invokes it with given arguments
function executeCallback (
    callback:(arg1: number, arg2: number) => void,
    arg1 : number,
    arg2 : number
): void {
    callback(arg1, arg2);
}
         // Example callback function that adds two numbers
const add = (a: number, b: number) => {
    console.log(a + b);                  // Outputs the sum of a and b
};

executeCallback(add, 5,5);          // Outputs: 10

  // Demonstrates invoking a callback function with arguments to perform an addition.