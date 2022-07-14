// Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

// Input Format

// First line will contain the number of rows N (same as the number of columns)

// After that next N lines will N rows of the matrix.

// Constraints

// 1 <= N <=1000

// 1 <= Elements Of the Matrix <= 10000

// Sample Input 1 

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// Sample Output 1

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5

function rotateBy90(R, matrix){
    //write code here
    
for(var j=R-1;j>=0;j--)
{
    var str="";
    for(var i=0;i<R;i++)
    {
        str=str+matrix[i][j]+" ";
    }
    console.log(str);
}
  
}
var matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8]
]
rotateBy90(4, matrix)