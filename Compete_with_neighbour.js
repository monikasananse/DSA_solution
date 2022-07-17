// Description

// You are provided an array A which has N elements. Your task is to find the count of such occurrence where the element is larger than its neighbour.

// Input
// Input Format :

// First line of input contains N which is the number of elements present in the array.

// Second line contains N integer which are the elements of the array A.

// Constraints :

// N<100

// There will always be at least 2 elements

// Sample Input 1 

// 8
// 1 2 3 4 2 1 6 5
// Sample Output 1

// 2

// Hint

// Output Explanation :

// In this case, 4 is bigger than both its neighbour 3 and 2.

// Similarly 6 is bigger than both its neighbour 5 and 1.

// So, the answer is 2.

function logic(n,arr)
    {
        var count=0;
        if(arr[0]>arr[1])
        {
            count++;
        }
        if(arr[n-1]>arr[n-2])
        {
            count++;
        }
        for(var i=1;i<arr.length-1;i++)
        {
            if(arr[i]>arr[i+1] && arr[i]>arr[i-1])
            {
                count++;
            }
        }
        console.log(count);
    }
    var n=7;
    var arr=[1,12,6,8,9,3,5];
 logic(n,arr);
