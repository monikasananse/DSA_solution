// You are given a number, stored in a variable with the namenum

// Print all the odd numbers lesser than or equal to the value stored innum

// Only those numbers need to be printed which are greater than zero

// For example, given that the value stored innum = 12

// Therefore, the output will be
// 1
// 3
// 5
// 7
// 9
// 11
// Input
// The first and the only line of the input contains the value stored in the variablenum

// Output
// Print all the odd numbers greater than 0, and less than or equal to the value stored innum. Print all the numbers on a new line

// Sample Input 1 
// 13
// Sample Output 1
// 1
// 3
// 5
// 7
// 9
// 11
// 13

function MoveAhead(num)
{
    var i=1;
    while(i<=num)
    {
        console.log(i);
        i=i+2;    }
}
MoveAhead(13);