// Description

// You are given a sorted arrayAof sizeN, and another integerK
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo

// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case contains N and K, the size of the array and the value of K.

// The next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// -10^9 <=A[i]<= 10^9

// 0 <= K <= 10^9

// Sample Input 1 

// 2
// 5 3
// 1 2 3 4 5
// 5 8
// 1 2 3 4 5 

// Sample Output 1

// Yes
// No

function k_difference(n,k,arr)
{
    var left=0;
    var right=left+1;
    var diff=0;
    while(left<n && right<n)
    {
        diff=arr[right]-arr[left];
        if(diff==k)
        {
            console.log("Yes");
            return
        }
        else if(diff<k)
        {
            right++;
        }
        else if(diff>k)
        {
            left++;
        }
    }
    console.log("No");
}
k_difference(5,3,[1,2,3,4,5])