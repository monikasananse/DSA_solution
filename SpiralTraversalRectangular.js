// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N and M, the number of rows and columns in the given matrix.

// The next N lines contain M values each denoting the elements of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N, M <= 200

// 1 <= A[i][j] <= 200

// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12

// Sample Output 1

// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 

function spiralTraversal(N, M, arr){
    //write code here
    var top=0;
    var bottom=N-1;
    var left=0;
    var right=M-1;
    var str="";
    var count=0;
    
    while(count<(N*M))
    {
        for(var i=top;i<=bottom;i++)
        {
            str=str+arr[i][left]+" ";
            count++;
        }
        
        if(count==N*M)
        {
            break;
        }
        left++;
        for(var i=left;i<=right;i++)
        {
            str=str+arr[bottom][i]+" ";
            count++;
        }
        
        if(count==N*M)
        {
            break;
        }
        bottom--;
        for(var i=bottom;i>=top;i--)
        {
            str=str+arr[i][right]+" ";
            count++;
        }
        if(count==N*M)
        {
            break;
        }
        right--;
        for(var i=right;i>=left;i--)
        {
            str=str+arr[top][i]+" ";
            count++;
        }
        if(count==N*M)
        {
            break;
        }
        top++;
    }
    console.log(str);
  
}
var arr=[
    [1,10,9],
    [2,11,8],
    [3,12,7]
]
spiralTraversal(3, 3, arr);
