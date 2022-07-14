
// You are given an arraymatrixofnrows andmcolumns which contains lower case English letters.

// How many times does the phrase "saba" appear horizontally, vertically, and diagonally in the grid?


// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters only

// Constraints

// 1 <= n,m <= 100


// Output
// Output Format

// Print the number of times the word “saba” appears in the grid.

// Sample Input 1 

// 5 5
// safer
// amjad
// babol
// aaron
// songs

// Sample Output 1

// 2

function twoArrayAndPhrase(n, m, matrix){
    //write code here
    var str="";
    var count=0;
    
  for(var i=0;i<n;i++)
  {
      for(var j=0;j<m;j++)
      {
          if(j<m-3) //Horizontally
          {
              str=matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]+matrix[i][j+3];
              if(str=="saba")
              {
                  count++;
              }
          }
          if(i<n-3) //Vertically
          {
              str=matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]+matrix[i+3][j];
              if(str=="saba")
              {
                  count++;
              }
          }
          if(i<n-3 && j<m-3) //right diagonal down
          {
              str=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]+matrix[i+3][j+3];
              if(str=="saba")
              {
                  count++;
              }
          }
          if(i>=3 && j<m-3) //right diagonal up
          {
              str=matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]+matrix[i-3][j+3];
              if(str=="saba")
              {
                  count++;
              }
          }
      }
  }
  console.log(count);
}

var matrix=[
   ['s','a','f','a','r'],
   ['a','m','j','a','d'],
   ['b','a','b','o','l'],
    ['a','a','r','o','n'],
    ['s','o','n','g','s']
]
twoArrayAndPhrase(5,5, matrix)
