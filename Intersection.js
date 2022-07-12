// You are given 2 arraysarr1andarr2ofNintegers.

// Your task is to write a program that finds the one integer which is common in both arrays (arr1andarr2).

// Note: There is always one integer common in both arrays.

// Input Format

// First line of input containsN, size of arrays.

// Second line containsNspace separated integers making the first array (arr1)

// Third line containsNspace separated integers making the second array (arr2)

// Constraints

// 1 <= N <= 1000

// Sample Input 1 

// 3
// 4 5 7
// 9 2 5
// Sample Output 1

// 5
function intersectionOfArray(N, arr1, arr2){
    //write code here
    for(var i=0;i<arr1.length;i++)
    {
        for(var j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                console.log(arr1[i]);
                return;
            }
        }
    }
}
intersectionOfArray(5,[1,2,3,4,5],[11,2,13,15,14])