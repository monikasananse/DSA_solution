// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.

// The first line of the input contains N and M, the dimensions of the matrix.

// The next N lines contain M space separated integers denoting the values of the matrix.

// Constraints

// 1 <= N , M <= 100

// 0 <= A[i][j] <= 1

// Sample Input 1 

// 3 2
// 1 0
// 0 1
// 1 1

// Sample Output 1

// 0 1 
// 1 0 
// 0 0 
function binaryMatrix(N,M, matrix) {
    //write code here
    for(var i=0;i<N;i++)
    {
        var str="";
        for(var j=0;j<M;j++)
        {
            if(matrix[i][j]==0)
            {
                str=str+1+" ";
            }
            else
            {
                str=str+0+" ";
            }
        }
        console.log(str);
    }
    
   
  }
  var matrix=[
    [1,0],
    [0,1],
    [1,1]
  ]
  binaryMatrix(3,2, matrix)
  