// You are given a 2D array(matrix), ofNrows andMcolumns.

// You need to print elements of array as shown in the diagram, on a single line.

// For example, for the above matrix, the required output would be as shown below.

// 4 3 2 1 5 6 7 8 12 11 10 9

// Sample Input 1 

// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12

// Sample Output 1

// 4 3 2 1 5 6 7 8 12 11 10 9

function traverse2dArray(N, M, matrix){
    //write code here
 var str="";   
for(var i=0;i<M;i++)
{
    for(var j=N-1;j>=0;j--)
    {
        str=str+matrix[j][i]+" ";
    }
    
}
console.log(str);
}
var matrix=[[1,8,9],
            [2,7,10],
            [3,6,11],
            [4,5,12]]
traverse2dArray(4, 3, matrix)