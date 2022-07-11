// You are given an arrayarrofNintegers.

// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.

function battleOfOddAndEven(n, arr){
    //write code here
    var even=0;
    var odd=0;
    for(var i=0;i<n;i++)
    {
        if(arr[i]%2==0)
        {
            even=even+arr[i];
        }
        else
        {
            odd=odd+arr[i];
        }
    }
    if(even<odd)
    {
        console.log("Odd");
    }
    else
    {
        console.log("Even");
    }
}
battleOfOddAndEven(5,[11,12,13,14,15])