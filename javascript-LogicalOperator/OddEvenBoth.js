// // Description

// // You are given two numbers, stored in the variable with the following names

// // one, two

// // If both the values are even, printEven

// // Else if both the values are odd, printOdd

// // else printEven-Odd

// // Input
// // The first and the only line of the input contains, the values stored inone, two

// // Output
// // If both the values are even, printEven

// // Else if both the values are odd, printOdd

// // else printEven-Odd

// // Sample Input 1 
// // 3 6
// // Sample Output 1
// // Even-Odd

// // Hint
// // In the sample test case, the value stored inone = 3, two = 6. Since, the value stored inoneis odd, and that stored intwois even
// // Therefore, the output isEven - Odd

// Description

// You are given two numbers, stored in the variable with the following names

// one, two

// If both the values are even, printEven

// Else if both the values are odd, printOdd

// else printEven-Odd


// Input
// The first and the only line of the input contains, the values stored inone, two


// Output
// If both the values are even, printEven

// Else if both the values are odd, printOdd

// else printEven-Odd


// Sample Input 1 

// 3 6
// Sample Output 1

// Even-Odd
// Hint

// In the sample test case, the value stored inone = 3, two = 6. Since, the value stored inoneis odd, and that stored intwois even

// Therefore, the output isEven - Odd

function oddEvenBoth(one, two) {
    // Write code here
    if(one%2==0 && two%2==0)
    {
        console.log("Even")
    }
    else if(one%2==1 && two%2==1)
    {
        console.log("Odd");
    }
    else
    {
        console.log("Even-Odd")
    }
}
oddEvenBoth(2,3)