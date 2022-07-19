// Description

// You are given a ciphered string, you have to decipher the string.

// For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".

// Note: The string contains only lower-case letters and numbers.

// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the length of the string.

// The next line contains the string, for which the decipher string is to be generated.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 200
// Sample Input 1 

// 2
// 6
// a2b1c2
// 6
// a2z1a2

// Sample Output 1

// aabcc
// aazaa

function decipher(str)
{
    var bag="";
    for(var i=0;i<str.length;i++)
    {
        if(typeof(str[i]=="string" && typeof(str[i+1]=="number")))
        {
            var line=0;
            while(line<str[i+1])
            {
                bag=bag+str[i];
                line++;
            }
        }
        i++;
    }
    console.log(bag);
}
decipher("m1o1n1i1k1a1")