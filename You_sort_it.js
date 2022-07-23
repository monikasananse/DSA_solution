// Description

// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// Input
// Input Format :

// The first line of input consists of the size of the array

// The next line consists of the array of size m

// Constraints :

// 1<=m<=1000

// 0<=A[i]<=1000

// Sample Input 1 
// 5
// 4 5 3 7 1

// Sample Output 1
// 4 2 0 1 3

function newSorting(n,arr)
{
    var arr2=[];
    for(var i=0;i<n;i++)
    {
        arr2.push(i);
    }
    for(var i=0;i<n;i++)
    {
        for(var j=0;j<n;j++)
        {
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                [arr2[j],arr2[j+1]]=[arr2[j+1],arr2[j]]
            }
        }
    }
    console.log(arr2.join(" "));
}
newSorting(5,[4,5,3,7,1])