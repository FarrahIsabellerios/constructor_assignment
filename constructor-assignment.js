function Person(firstName, middleName, lastName){
    this.firstName= firstName
    this.middleName= middleName
    this.lastName= lastName
    Person.prototype.fullName = function(){
        return(this.firstName + " " + this.middleName+ " " + this.lastName)
    }
}


person1 = new Person("Rafid", "Intisar" ,"Hossain")
person2 = new Person("Farrah", "Isabelle", "Rios")
console.log(person2.fullName())


function Book(title, author, rating){
    this.title = title
    this.author = author
    this.rating = rating
    Book.prototype.isGood = function(){
        if(rating >= 7){
        return "true"
     } else {
         return "false"
     }

    }
}
 HarryPotter = new Book ("HarryPotter", "JK Rowling", 5)
 console.log(HarryPotter.isGood())

 function Dog(name, breed, mood, hungry){
     this.name = name
     this.breed = breed
     this.mood = mood 
     this.hungry = hungry 
 }  
    Dog.prototype.playFetch = function(){
         this.hungry = true 
         this.mood = "playful"
             console.log ("ruff")
            
         }
     
     Dog.prototype.feed = function(){
         if (this.hungry){
             this.hungry = false
             console.log ("woof")
         } else{
             console.log("The dog doesn't look hungry")
         }
    }
     

     Brady = new Dog("Brady", "Shepherd", "playful", false)
     console.log(Brady.feed())
     
 

let freezingPoint = {celsius: 0, fahrenheit: 32, kelvin: 273}

function Celsius(celsius){
    this.celsius = celsius
}
Celsius.prototype.getFahrenheitTemp = function(){
    return 1.8 * this.celsius + 32
}
Celsius.prototype.getKelvinTemp = function(){
    return this.celsius + 273
}
Celsius.prototype.isBelowFreezing = function(){
    if (this.celsius < 0){
        return true
    }
}
outsideTempt = new Celsius(-5)
console.log(outsideTempt.getFahrenheitTemp())
console.log(outsideTempt.getKelvinTemp())
console.log(outsideTempt.isBelowFreezing())

function Movie(name,year,genre,cast,description){
    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast 
    this.description = description
}
Joker = new Movie("Joker", 2019, "Horror", "JP", "Clown movie")

Movie.prototype.blurb = function(){
    return this.description
}
console.log(Joker.blurb())


function Vector(x,y){
    this.x = x 
    this.y = y 
}

Vector.prototype.plus = function(newVector){
    newVec = new Vector(this.x + newVector.x, this.y + newVector.y)
     return newVec
}
Vector.prototype.minus = function(newVector){
    newVec = new Vector(this.x - newVector.x, this.y - newVector.y)
    return newVec
    
}
Vector.prototype.getLength = function(){
    
    return Math.sqrt((this.x*this.x) + (this.y*this.y))
}



vector1 = new Vector(3,4)
vector2 = new Vector(6,7)
console.log(vector1.plus(vector2))
console.log(vector1.minus(vector2))
console.log(vector1.getLength())


function Cylinder(radius, height){
    this.radius = radius
    this.height = height 
}

Cylinder.prototype.getVolume = function(){
return Math.PI * (this.radius*this.radius) * this.height
}
Cylinder.prototype.getSurfaceArea = function(){
    return (2*Math.PI*Math.pow(this.radius, 2)) + (2*Math.PI*this.radius*this.height)
}

newCyl = new Cylinder(3,4)
console.log(newCyl.getVolume())
console.log(newCyl.getSurfaceArea())

function Post(datePosted, user, text){
    this.datePosted = datePosted
    this.user = user 
    this.text = text
}
post = new Post()






    