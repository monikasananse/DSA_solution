// Description

// You are given an array of n elements and an integer k, you need to rotate the array by k 

// Input
// First-line contains t, which is the number of test cases

// For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated

// The second line of each test case contains n numbers which represent the elements of the array

// Constraints

// 1<=T<=20

// 1<=N<=50000, 0<=K<=1000000000

// 1 <= Ai <= 1000000

// Sample Input 1 

// 3
// 2 1
// 1 2
// 2 2
// 1 2
// 3 1
// 1 2 3

// Sample Output 1

// 2 1
// 1 2
// 3 1 2

function rotation(length,k,arr)
{
   
    if(k<length)
    {
        k=length;
    }
    else
    {
        k=k%length;
    }
    arr.reverse();
    var left=0;
    var right=k-1;
    while(left<right)
    {
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    left=k;
    right=length-1;
    while(left<right)
    {
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    console.log(arr.join(" "));
}
rotation(2,2,[1,2])