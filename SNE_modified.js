// Description:-
// Andy and Mark are playing a game of arrays.
// The game involves finding the smallest neighbor element to the left side for each element in the array
// Andy counts the number of elements which do not have a smaller neighbor element to the left side. Help Andy find the count

// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000


// Output
// Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side

// Sample Input 1 
// 8
// 39 27 11 4 24 32 32 1

// Sample Output 1
// 5

function logic(arr,length)
{
    var stack=[];
    var count=0;
    for(var i=0;i<length;i++)
    {
        while(stack.length!==0 && stack[stack.length-1]>=arr[i])
        {
            stack.pop();
        }
        if(arr[i]>stack[stack.length-1])
        {
            count++;
        }
        stack.push(arr[i]);
    }
    console.log(length-count);
}
logic([])
