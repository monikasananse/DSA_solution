// Description

// You are playing the popular game of "Age of Empires". You are the king of the empire where you have 2N workers.

// All workers will be grouped in the association with size 2, so a total of N associations have to be formed.

// The building speed of the i-th worker is A[i].

// To make an association, you pick up 2 workers. Let the minimum building speed between both workers be x, then the association has the resultant building speed x.

// You have to print the maximum value possible of the sum of building speeds of N associations if you make the associations optimally.

// Input
// First line contains an integer N, representing the number of associations to be made.

// Next line contains 2N space separated integers, denoting the building speeds of 2N workers.

// N <= 50000

// A[i] <= 10000

// Sample Input 1 
// 2
// 1 3 1 2

// Sample Output 1
// 3

function empires(arr,size)
{
    arr.sort(function(a,b){    //6 5 4 3 2 1
        return  b - a;
    })
    var sum=0;
    for(var i=1; i<arr.length; i=i+2)
    {
        sum=sum+arr[i];
    }
    console.log(sum);
}
empires([1,],4)
