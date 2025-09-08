// Primitive

//7 types: string, number, boolean, null, undefined, Symbol, BigInt 

// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros= ["shaktiman", " naagraj ", "doga"]
let myObj= {
    name:"Ishaan",
    age:22,
}

const myFunction= function(){
    console.log("Hello world")
}

console.log(typeof(myFunction))

//Stack (Primtive), Heap (Reference)

let user1 ={
    email: "shuklaishaan01@gmail.com",
    upi: "user@ybl" 
}

let user2= user1

user2.email="ishaanshukla744@gmail.com"

console.log(user1.email)
console.log(user2.email)





