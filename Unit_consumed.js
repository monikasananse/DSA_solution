// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// unit consumed-per-unit-price
// 0-50         -   3
// 51-150       -   5
// 150 and above -  10

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// You are given total amount of bill, N , you need to find total unit consumed.

// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// 0 <= N <= 1000


// Output
// Print number of units consumed.

//input 930   output 170
// Total 930 rupees is the bill amount.

// So total unit consumed would be 170. See calculation below.

// Charges for 170 units :-

// Fixed Charge :- 80
// Charges for first 50 units :- 50 * 3 = 150
// Charges of next 100 units :- 100 * 5 = 500
// Charges of next 20 units :- 20 * 10 = 200
// Total Charges => 80 + 150 + 500 + 200 = 930

function unitsConsumed(n) {
    //write code here
    
    var units=0;
    var remaining=n-80;
    
    if(remaining>650)
    {
        units=units+150;
        remaining=remaining-650;
        units=units+remaining/10;
    }
    else if(remaining>150 && remaining<650)
    {
        units=units=50;
        remaining=remaining-150;
        units=units+remaining/5;
    }
    else 
    {
        units=remaining/3;
    }
    console.log(units);
    
       
}
unitsConsumed(930);

