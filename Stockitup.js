// Description:-
// Due to recent pandemic announcement we need to make a stock requirement generator, where all the items required for a week with price are given.

// For one week:

// 1. Flour = 5kg| Price = 110 per kg

// 2. Rice = 2kg| Price = 120 per kg

// 3. Sugar = 2kg| Price = 42 per kg

// 4. Pulse = 3kg| Price = 53 per kg

// 5. Bread = 2 packet | Price = 40 per packet

// 6. Milk = 5 litre| Price = 32 per litre

// 7. Oil = 2 litre| Price = 126 per litre

// The user will give N number of weeks for stock calculation with a list of 7 elements with 0 and 1 representing each item in the list, if the element is 0 then that item is not required by the person.

// The output should be the overall cost of the items for that number of weeks.

// Input Format :

// N number of weeks

// List of 0 and 1 representing the require of the item

// Constraints :

// 0 <= N <= 1000

// Sample Input 1 

// 4
// 0 1 1 1 0 0 1

// Sample Output 1

// 2940

function logic(n,arr)
{
    var quantity=[5,2,2,3,2,5,2];
    var price=[110,120,42,53,40,32,126]
    
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==1)
        {
            sum=sum+quantity[i]*price[i];
        }
        
    }
    console.log(sum*n);

}
var arr=[0,1,1,1,0,0,1]
logic(4,arr);
