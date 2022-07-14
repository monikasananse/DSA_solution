// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.

// Input Format

// First line contains N

// The second line contains N integers separated by spaces.

// Constraints

// N < 100

// The array contains integers only

// Sample Input 1 

// 5
// 0 2 0 6 9

// Sample Output 1

// 0
function maximumOccuringElement(A,N){
    //write code here
    var obj={};
    for(var i=0;i<N;i++)
    {
        if(obj[A[i]]==undefined)
        {
            obj[A[i]]=1;
        }
        else
        {
            obj[A[i]]++;
        }
    }
    //console.log(obj);
    var max=0;
    var index=0;
    for(var key in obj)
    {
        if(obj[key]>max)
        {
            max=obj[key];
            index=key;
        }
    }
    console.log(index);
}

maximumOccuringElement([1,2,2,6,6],5)
