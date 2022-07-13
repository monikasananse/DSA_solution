function traverse2dArray(N, M, matrix){
    //write code here

var str="";
for(var i=M-1; i>=0; i--)
{
    for(var j=0; j<N; j++)
    {
        str=str+matrix[j][i]+" ";
    }
}
console.log(str);
}
var matrix=[
            [1,8,9],
            [2,7,10],
            [3,6,11],
            [4,5,12]
]
traverse2dArray(4, 3, matrix)

