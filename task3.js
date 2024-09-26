// Create a class called MathHelper with a static method:

// - addNumbers(a, b): returns the sum of a and b

class MathHelper{
    
    static addNumbers(a,b){
        return `The sum of ${a} and ${b} is ${a+b}`;
    }
}
let result = MathHelper.addNumbers(10,20);
console.log(result);
