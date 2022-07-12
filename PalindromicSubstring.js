// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.

// Input Format

// First line contains S, a string.

// Constraints

// 1 <= Length of string <= 100

// Sample Input 1 

// thisracecarisgood

// Sample Output 1

// 7
// Hint 
// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7

function masaiPalSubString(S){
    //write code here
    var max=-Infinity;
    for(var i=0;i<S.length;i++)
    {
        var bag=""
        for(var j=i;j<S.length;j++)
        {
            bag=bag+S[j];
            var str2="";
            var count=0;
            
            for(var k=bag.length-1;k>=0;k--)
            {
                str2=str2+bag[k];
            }
            if(bag==str2)
            {
               count=bag.length; 
            }
            if(max<count)
            {
                max=count;
            }
        }
    }
    console.log(max);
}
masaiPalSubString("thisracecarisgood");
