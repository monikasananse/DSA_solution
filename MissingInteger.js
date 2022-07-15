// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

// Input Format

// The first and only line contains N-1 integers

// Constraints

// N<100

// Sample Input 1 

// 4 5 1 3

// Sample Output 1

// 2

function logic(arr)
{
    var arr2=[];
 for(var i=0;i<arr.length+1;i++)
 {
     arr2.push(i+1);
 }
 //console.log(arr2.join(" "));
 
 var sum1=0;
 for(var i=0;i<arr2.length;i++)
 {
     sum1=sum1+arr2[i];
 }
 var sum2=0;
 for(var i=0;i<arr.length;i++)
 {
     sum2=sum2+arr[i];
 }
 console.log(sum1-sum2);
}
logic([1,5,2,3,6,7])
