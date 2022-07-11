// Given an array,arrwhich hasNintegers.

// You need to print the smallest and largest element present in the array each on new lines.

// Input Format

// The first line contains an integerN.

// The second line containsNspace separated integers, which are integers of arrayarr.

// Constraints

// 1 <= N <= 100

// Output Format

// One first line, print minimum of all elements.

// On the second line, print the maximum of all elements.

// Integers in array are:-[-2, 0, 8, 4]

// Minimum integer in array[-2, 0, 8, 4]is-2

// Maximum integer in array[-2, 0, 8, 4]is 8

function smallestAndLargestOfAll(n, arr){
    //write code here
    var max=-Infinity;
    var min=Infinity;
    for(var i=0;i<n;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
            
        }
        
    }
    for(var i=0;i<n;i++)
    {
        if(min>arr[i])
        {
            min=arr[i];
        }
        
    }
    console.log(min);
    console.log(max);
    
    
}
smallestAndLargestOfAll(5,[-2,19,20,0,20])