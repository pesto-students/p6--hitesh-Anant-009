let name ={
    First_name:"Anant",
    Last_name:"Bajpai",
}
let fullname = function (city,state)
{
 console.log(this.First_name + " " + this.Last_name + " Lives in " +city + ", "+state);
 }
 fullname.call(name,"Lucknow","Uttarpradesh"); //using call for borrwing function
 
 let name2 ={
     First_name:"Sachin",
     Last_name:"Tendulkar",
 }
 fullname.apply(name2, ["Mumbai","maharashtra"]); //using apply for borrowing function
 
 let name3 ={
     First_name:"Virat",
     Last_name:"kohli",
 }
 let captainname = fullname.bind(name3,"Delhi","India") //bind method 
 captainname();
 console.log(captainname);