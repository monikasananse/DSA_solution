// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.


// Input
// Input Format :

// First line contains number of integers N present in the array.

// Second line contains  N  space separated integers.

// Constraints :

// 1 <= N <= 100


// Output
// Output "Yes" or "No" based on condition mentioned above.
//input  5
        //3 7 0 9 8

//output  No

function equalTo42(size,arr) {
    //write code here
    for(var i=0;i<size;i++)
    {
        if(arr[i]==42)
        {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}
equalTo42(5,[3,7,0,9,8])