// Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

// Print -1 -1 if not found.
// First line contains T, number of test cases

// Second line contains N and B where N is the size of the array and B is the target sum

// 1 <= T <= 10

// 2 <= N <= 1000, 2 <= B <= 3e5

// 1 <= Ai <= 1e5

// it is guaranteed that sum of N over all test cases is at most 1000.

// Sample Input 1 

// 3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49

// Sample Output 1

// 0 1
// 3 4
// -1 -1

function twosum(arr,length,targetvalue)
{
    var left=0;
    var right=length-1;
    var sum=0;
    while(left<right)
    {
        sum=arr[left]+arr[right];
        if(sum==targetvalue)
        {
            return console.log(left,right);
        }
        else if(sum<targetvalue)
        {
            left++;
        }
        else if(sum>targetvalue)
        {
            right--;
        }
    }
    return console.log(-1,-1);
}
var arr=[2,7,11,15]
twosum(arr,4,9)