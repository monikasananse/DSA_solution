// You are given an array, stored in a variable with the namearr

// The size of the array is stored in a variable with the namesize

// You have to print the reverse traversal of the array

// For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be

// 4 3 2 1

// Sample Input 1 

// 5
// 1 3 2 4 5

// Sample Output 1

// 5 4 2 3 1

function reverseArrayTraversal(n, arr){
    //write code here
    var str="";
for(var i=n-1;i>=0;i--)
{
   str=str+arr[i]+" "; 
}
console.log(str);
}
reverseArrayTraversal(5, [11,12,13,14,15])