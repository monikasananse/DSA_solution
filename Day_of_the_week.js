// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}

// The first line of the input contains the name of the current day.

// The second line of the input contains N.

// Constraints

// 1 <= N <= 1000

// Sample Input 1 

// Wednesday
// 8
// Sample Output 1

// Thursday

function dayOfTheWeek(day, N) {
    //write code here
    
          var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
          var ok=N%7;
          var count=0;
          for(var i=0; i<arr.length; i++)
          {
              if(arr[i]==day)
              {
                  count=i; 
              }
                
          }
          var ok2=0;
          if((count+ok)>=7)
          {
              ok2=(count+ok)%7;
              console.log(arr[ok2]);
          }
          else
          {
              console.log(arr[count+ok]);
          }
          
  }
  var day="Monday";
  var N=8;
  dayOfTheWeek(day, N)
    
  
  