
// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.

// Input Format

// The first and only line of input contains the StringS.

// Constraints

// 1 <= Length of S <= 1000


// Output
// Print the value of string.

// Sample Input 1 

// aba

// Sample Output 1

// 4

function stringValue(S) {
    //write code here
   var number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
   var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   
   var sum=0;
   for(var i=0;i<S.length;i++)
   {
       for(var j=0;j<alpha.length;j++)
       {
           if(S[i]==alpha[j])
           {
              sum=sum+number[j]; 
           }
       }
   }
   console.log(sum);
  }
stringValue("monika")  