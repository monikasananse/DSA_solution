// You are given a 3D Array, of N layers, M rows, and K columns. You have to take the input, and print the 3D Array in the form as mentioned in the sample test case.


// The first line of the input contains N, M and K.

// The next line contains N * M * K, integers denoting the elements of the 3D array.

// Constraints

// 1 <= N, M, K <= 10

// 1 <= A[i][j][k] <= 10

// Sample Input 1 

// 2 2 2
// 1 2 3 4 5 6 7 8

// Sample Output 1

// 1 2 
// 3 4 
// 5 6 
// 7 8 

function logic(L,R,C,arr)
{
    var line=0;
    for(var i=0;i<L;i++)
    {
        
        for(var j=0;j<R;j++)
        {
            var str="";
            for(var k=0;k<C;k++)
            {
                str=str+arr[line++]+" ";
            }
            console.log(str);
        }
        
    }
}
logic(2,2,2,[1,2,3,4,5,6,7,8])