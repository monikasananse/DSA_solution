// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6

// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9

// Sample Output 1

// 21

function subarray(arr,length,k)
{
    var sum=0;
    var max=0;
    for(var i=0; i<k; i++)
    {
        sum=sum+arr[i];
    }
   
    for(var j=k; j<length; j++)
    {
        sum=sum+arr[j];
        sum=sum-arr[j-k];
        if(max<sum)
        {
            max=sum;
        }
    }
    console.log(max);   
}

var arr=[-1,-1,-2,1,-2,4,1,9,3,9];
var length=10;
var k=3;
subarray(arr,length,k)