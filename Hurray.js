// You are provided an integer N.

// For all numbers in the range[1,N], includingNyou have to print a string as per the following rules:

// PrintMasai School, if the number is a multiple of both 5 and 7.
// PrintMasai. if the number is a multiple of 7 only.
// PrintSchool, if the number is a multiple of 5 only.
// Else in all other cases print Hurray!


function Hurray(N){
    for(var i=1;i<=N;i++)
    {
        if(i%5==0 && i%7==0)
        {
            console.log("Monika Sananse");
        }
        else if(i%7==0)
        {
            console.log("Monika");
        }
        else if(i%5==0)
        {
            console.log("sananse");
        }
        else
        {
            console.log("Hurray!");
        }
    }
}
Hurray(7);