// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var year_of_birth=1997;
var calculated_age=2022-year_of_birth;

if(calculated_age>=13 && calculated_age<=19)
{
    console.log("Teenage");

}
else if(calculated_age>=20 && calculated_age<=29)
{
    console.log("Twenties");
}
else
{
    console.log("Not Allowed");
}