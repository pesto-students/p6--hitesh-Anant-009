var Person = function() {};

Person.prototype.initialize = function(name) 
{ 
    this.name = name;
 }
var Teacher = function() { 
  this.teach = function(subject)
  { 
    console.log(this.name + " is now teaching " + subject); 
  } 
}
  Teacher.prototype = new Person(); var him = new Teacher();
him.initialize("Anant"); 
him.teach("JavaScript");