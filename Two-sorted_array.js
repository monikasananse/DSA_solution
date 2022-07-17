// Description

// You are given two arraysAandB, each of size N.
// The first array A, is sorted in ascending order, while the second array is sorted in descending order.
// You have to find the number of elements common in both the arrays.
// Try to solve this without using any extra space

// The first line of the input containsT, the number of test cases.

// The first line of each test case, contains N, the number of elements in the arrayAandB

// The next line of the test case, containsNspace separated integers, denoting the number of elements of the arrayA

// The next line containsNspace separated integers, denoting elements of the arrayB.

// Constraints

// 1 <=T<= 10

// 1 <=N<= 1000000

// 1 <=A[i]<= 1000

// Sample Input 1 

// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1
// Sample Output 1

// 4
// Hint:
// In the sample test case, the number of elements common in both the arrays are {1,2,3,4}. Therefore, the required output is 4.

function logic(n,arr1,arr2)
{
    var left=0;
    var right=n-1;
    var count=0;
    while(left<n && right>=0)
    {
        if(arr1[left]===arr2[right])
        {
            count++;
            left++;
            right--;

        }
        else if(arr1[left]<arr2[right])
        {
            left++;
        }
        else if(arr1[left]>arr2[right])
        {
            right--;
        }
    }
    console.log(count);
}
logic(6,[1,2,2,3,4,5],[4,4,3,2,1,1])