let a= 10
const b =30
var c= 30

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username= "Ishaan "
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)
    two()

}
// one()


//Closure - Child function can access elements of partent function
console.log(addone(6))


function addone(num){
    return num+2

}

const x =function(nums){
    return nums +1
}
console.log(x(7))






