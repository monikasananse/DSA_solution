// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print only the odd elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will be

// 1
// 3
// 5


function evenArray(n, arr){
    //write code here
for(var i=0;i<n;i++)
{
    if(arr[i]%2==1)
    {
        console.log(arr[i]);
    }
    else
    {
        continue;
    }
}
}
evenArray(5,[11,0,6,13,9])