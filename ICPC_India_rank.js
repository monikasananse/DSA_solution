//ICPC (https://icpc.baylor.edu/) is International Collegiate Programming Contest is an algorithmic programming contest for college students. You are provided list of countries in correct ranking. Your task is to write a program that prints the rank of India in ICPC.

// Input Format:

// First line contains N which is number of countries.

// Next N line contains names of N countries in the order of their ranking.

// Constraints:

// N<1000
// Sample Input 1 

// 5
// Russia
// USA
// Japan
// China
// India

// Sample Output 1

// 5

function findrank(length,arr)
{
    for(var i=0; i<length; i++)
    {
        if(arr[i]=="India")
        {
            console.log(i+1);
        }
    }
}

var arr=["Russia","USA","Japan","China","India"]
findrank(5,arr)