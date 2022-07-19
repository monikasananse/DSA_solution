// Description

// You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

// USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION

// Input
// Input Format:

// First line of input contains N

// Second line of input contains N numbers

// Constraints:

// N < 500
// Sample Input 1 

// 5
// 3 5 0 9 8

// Sample Output 1

// 0 3 5 8 9

function selectionsort(N,arr)
{
    for(var i=0; i<N-1; i++)
   {
       var index=i;
       for(var j=i+1; j<N; j++)
       {
           if(arr[j]<arr[index])
           {
              [ arr[index],arr[j]]=[arr[j],arr[index]];
           }
       }
   }
   console.log(arr.join(" "));
}
selectionsort(5,[15,12,65,39,20])