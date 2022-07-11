// You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.

function subStrUnderCond(s){
    //write code here
    var count=0;
    for(var i=0;i<s.length;i++)
    {
        var bag="";
        for(var j=i;j<s.length;j++)
        {
             bag=bag+s[j];
             
             if(bag[0]===bag[bag.length-1])
             {
                 count++;
             }
        }
    }
    console.log(count);
}
subStrUnderCond("abcab")
    
