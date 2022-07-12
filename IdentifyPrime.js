// You are given a number stored in a variable with the namenum

// Check if the number is a prime number or not

// If the value stored innum, is a prime number printYes, else printNo

// Note : A prime number is a number, that is divisible by only 1 and the number itself.

// Input
// The first and the only line of the input contains the value stored in num


// Output
// If the value stored innum, is a prime number printYes, else print No

// Hint 
// In the sample test case, the value stored innum = 13. Since,13is a prime number, the output is Yes

function identifyPrime(num) {
    // Write code here
    var count=0;
for(var i=1;i<=num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count==2)
{
    console.log("Yes");
}
else
{
    console.log("No");
}
}
identifyPrime(11)
