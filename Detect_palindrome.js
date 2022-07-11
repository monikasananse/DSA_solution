// You are given an integernum.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.

function detectPalindrome(num){
    //write code here
    var x=num;
    var output=0;
    var remainder=0;
    while(x>0)
    {
         remainder=x%10;
        output= output*10+remainder;
         x=Math.floor(x/10);
        
    }
    if(output==num)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}
detectPalindrome(1212)

    