// Given amatrixwithNrows andMcolumns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

// Look at the image for better understanding

// Sample Input 1 

// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5

// Sample Output 1
// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

function goInZigZag(N, M, matrix){
    //write code here
var str="";
for(var i=0;i<N;i++)
{
    if(i%2===0)
    {
        for(var j=M-1;j>=0;j--)
        {
            str=str+matrix[i][j]+" ";
        }
    }
    else 
    {
        for(var j=0; j<M; j++)
        {
            str=str+matrix[i][j]+" ";
        }
    }
}
console.log(str);
}

var matrix=[
            [4,7,1,1,7],
            [8,9,9,6,1],
            [6,4,9,5,1],
            [7,7,4,7,7],
            [8,6,2,5,5]
]
goInZigZag(5, 5, matrix)
