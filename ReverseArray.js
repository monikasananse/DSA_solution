// You are given an array A of length n. Your task is to write a program that prints the array in reversed form.

// Input Format

// First line contains n (number of elements present in the array)

// Second line contains n space separated integers which are the elements of the array.

// Constraints

// n< 100

// Sample Input 1 

// 5
// 12 34 11 9 18

// Sample Output 1

// 18 9 11 34 12

function logic(arr,n)
{
var str="";
for(var i=n-1;i>=0;i--)
{
    str=str+arr[i]+" ";
}
console.log(str);
}
logic([18,9,11,12,1],5)