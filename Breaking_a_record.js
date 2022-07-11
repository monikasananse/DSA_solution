// You are provided the highest runs,N, ever scored in a cricket match till now, which is current highest record.

// You are also given current runs,M scored by Sachin (Tendulkar) in a today's match.

// If Sachin breaks current record in that match, print Broken.
// If Sachin could not break that record, print Not Yet.
// If Sachin score exactly as current highest record, printWao.

//input 264 200     output=:Not Yet

function Breaking_the_record(n,m){

    if(m>n)
    {
        console.log("Broken");
    }
    if(m<n)
    {
        console.log("Not Yet");
    }
    if(m==n)
    {
        console.log("Wao");
    }

}
Breaking_the_record(264,200)