//singleton 

//object literals

const JsUser = {
    name: "Ishaan",
    age: 22,
    location:"Indore",
    email:"shuklaishaan01@gmail.com",
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUser["name"])

JsUser.greeting = function(){
    console.log("Hello User")
}
console.log(JsUser.greeting())