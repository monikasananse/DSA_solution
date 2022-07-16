// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// The first line of the input contains T, the number of test cases.

// The next line contains N, the size of the square matrix.

// The next N lines contains N space separated integers each denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50

// 1 <= A[i][j] <= 50

// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1

// 7 4 1 2 3 6 9 8 

function printu(length,mat)
{
    var str="";
    var left=0;
    var right=length-1;
    var top=0;
    var bottom=length-1;
    for(var i=bottom; i>=top; i--)
    {
        str=str+mat[i][left]+" ";
    }
    left++;
    for(var i=left; i<=right; i++)
    {
        str=str+mat[top][i]+" ";
    }
    top++;
    for(var i=top; i<=bottom; i++)
    {
        str=str+mat[i][right]+" ";
    }
    right--;
    for(var i=right; i>=left; i--)
    {
        str=str+mat[bottom][i]+" ";
    }
    console.log(str);
}
var mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
printu(3,mat)