// Description

// You are given an array of N unsorted numbers. Your task is to write BUBBLE SORT such that numbers present in the array gets sorted.

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

function BubbleSort(N,arr)
{
    for(var i=0; i<N; i++)
    {
        for(var j=0;j<N-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr.join(" "));
}
BubbleSort(5,[12,56,32,569,2])

//you can reverse it by just replace greater than sign into less than.