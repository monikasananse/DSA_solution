// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1.


// Input Format

// The first line contains a single integerN.

// Next line contains N space separated integers A[k] , (0 <= k < N).

// Constraints

// 1 <N< 100000

// 0 <A[k]< 1000000000

// Output Format

// Print a single line containing one integer, the first array index of the smallest element that CAN be removed, and -1 if there is no such element that he can remove!

// Sample Input 1 

// 5
// 14 7 8 2 4

// Sample Output 1

// 1


function applyBasicMaths(N,A){
    //write code here
var index=-1;
var min=Infinity;
for(var i=0;i<N;i++)
{
    var sum=0;
    for(var j=0;j<N;j++)
    {
        if(i==j)
        {
            continue;
        }
        sum=sum+A[j];
    }
    if(sum%7===0)
    {
        if(min>A[i])
        {
            min=A[i];
            index=i;
        }
    }
    
}
console.log(index);
}

applyBasicMaths(5,[14,7,8,2,4])


