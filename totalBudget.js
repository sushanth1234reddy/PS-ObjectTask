//  Create the function that takes an array with objects and returns the sum of
// people&#39;s budgets.
// Examples :
// getBudgets([
// { name: &quot;John&quot;, age: 21, budget: 23000 },
// { name: &quot;Steve&quot;, age: 32, budget: 40000 },
// { name: &quot;Martin&quot;, age: 16, budget: 2700 }
// ]) ➞ 65700

function getBudgets(inp){
    let sum=0;
    for(i of inp){
        
        sum=sum+i.budget;
    }
    console.log("Total Budget is: "+sum);
}

let input=[
{ name: "John", age: 21, budget: 23000 },
{ name:"Steve", age: 32, budget: 40000 },
{ name:"Martin", age: 16, budget: 2700 }
];
getBudgets(input)
