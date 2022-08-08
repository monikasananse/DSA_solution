// Description
// You are given two numbers, stored in the variable with the following names

// one, two
// If both the values are Even, printBoth, else printNo

// Input
// The only line of input contains two numbers, the values stored in one, two

// Output
// If both the values are Even, printBoth, else print No

// Sample Input 1 
// 4 7
// Sample Output 1
// No

// Hint
// In the sample test case, the value stored inone = 4andtwo = 7. The value stored in one is Even, while that stored in two is Odd. Therefore, the output is No

function logicalEvens(one, two) {
    if(one%2===0 && two%2===0)
    {
        console.log("Both");
    }
    else
    {
        console.log("No");
    }
}
logicalEvens(23,56);
