//Given JSON data iterate with for,for in,for of and forEach loops respectively.

var user=[{"Name":"Hari",
         "Age":"25",
         "Email":"hari@gmail.com",
         "Occupation":"Web Developer"},

         {"Name":"Raju",
         "age":"26",
         "email":"raju@gmail.com",
         "Occupation":"Doctor"},
             ];


//for loop 
console.log(".......for loop.......");
for(i=0;i<user.length;i++)
{
   console.log(JSON.stringify(user[i]));          
} ;


//for in loop
console.log("......for in loop......");
for( const x in user)
{
    console.log(JSON.stringify(user[x]));
};      


//for of loop
console.log("......for of loop......");
for(let a of user)
{
    console.log(JSON.stringify(a));
};


//for Each loop
console.log("......forEach loop......");
user.forEach(function()
{
    console.log(JSON.stringify(user[0]));
});

 
