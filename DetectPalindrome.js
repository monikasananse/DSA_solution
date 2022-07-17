// You are given a string S. Find if the string, can be converted into a palindrome.

// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.

// Deletion or addition of characters is not allowed.

// The first line contains T, the number of test cases.

// The first line of each test case contains N, the length of the string.

// The next line contains the string.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 100

// Sample Input 1 

// 2
// 6
// aabbcc
// 5
// aabcd

// Sample Output 1

// Possible!
// Not Possible!

function logic(n,str)
    {
        var obj={};
        for(var i=0;i<n;i++)
        {
            if(obj[str[i]]==undefined)
            {
                obj[str[i]]=1;
            }
            else
            {
                obj[str[i]]++;
            }
        }
        var c=0;
        for(var key in obj)
        {
            if(obj[key]%2==1)
            {
                c++;
            }
        }
        if(c<=1)
        {
            console.log("Possible!");
        }
        else
        {
            console.log("Not Possible!");
        }
    }

logic("aabcc");
