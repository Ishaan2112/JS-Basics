function addtowNum(num1, num2,num3){
    return num1+num2+num3

}
const result= addtowNum(4,5,6)
// console.log(result)


function loginUserMessage(username){
    if(username ===undefined){
        console.log("Please enter a username");
        return 
        

    }
    return `${username} just logged in `
}
// console.log(loginUserMessage())

function calculateCartPrice(...num1){ // ... is rest operator
    return num1
}

console.log(calculateCartPrice(200,400,600))

const user ={
    username  :"Ishaan ",
    price: 199

}

function handleObject(anyobject){
    console.log(`Usesname is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)

const myNewArray =[100,200,300,400]
 
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


