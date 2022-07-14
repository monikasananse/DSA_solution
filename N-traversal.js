// You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding.

// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

// Next N lines contain N space separated integers, denoting the values of the matrix.



// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000

// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1

// 7 4 1 5 9 6 3 
function nTraversal(matrix) {
    var str="";
    var r=matrix.length;
    var c=matrix[0].length;
    for(var i=r-1;i>0;i--)
    {
        str=str+matrix[i][0]+" ";
    }
    for(var i=0;i<r-1;i++)
    {
        str=str+matrix[i][i]+" ";
    }
    for(var i=r-1;i>=0;i--)
    {
        str=str+matrix[i][c-1]+" ";
    }
    
    console.log(str);
  }
  var matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  nTraversal(matrix)