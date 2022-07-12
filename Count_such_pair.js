// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.

// Input Format :

// First line contains 2 integers: N and K.

// Second line contains N space separated integers which are the elements of the array.

// Constraints :

// 1 <= N <= 100

// Print the count of such pairs whose sum is K.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2

// Pairs whose sum is 9 are:- {3,6} , {2, 7}. So answer is 2.




function countSuchPairs(N,K,A){
    //write code here
    var count=0;
    for(var i=0;i<N;i++)
    {
        for(var j=i+1;j<N;j++)
        {
            if(A[i]+A[j]==K)
            {
                count++;
            }
        }
    }
    console.log(count);
}
countSuchPairs(5,9,[3,0,6,2,7])