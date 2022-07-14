// The transpose of a matrix is an operator which flips a matrix over its diagonal, that is it switches the row and column of the matrix by producing another matrix.

// See sample test case for better understanding

// So, given an array of n rows and m columns, generate the transpose of the matrix.

// Input Format:

// First line contains two integers n and m

// Next n lines contain m integers which represents each row of 2d array

// Constraints:

// n,m <= 500

// Sample Input 1 

// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// Sample Output 1

// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 

function transposeTheMatrix(N, M, matrix){
    //write code here
for(var i=0;i<M;i++)
{
    var str="";
    for(var j=0;j<N;j++)
    {
        str=str+matrix[j][i]+" ";
    }
    console.log(str);
}
  
}

var matrix=[
        [0,0,0,0],
        [1,1,1,1],
        [2,2,2,2],
        [3,3,3,3],
        [4,4,4,4]
]
transposeTheMatrix(5, 4, matrix)