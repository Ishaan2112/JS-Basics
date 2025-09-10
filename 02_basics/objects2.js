//object singleton 

const tinder = new Object()
tinder.id = "123abc"
tinder.name="Sammy"
tinder.isLoggedIn= false

// console.log(tinder)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName: {
            firstName: "Ishaan",
            lastName:"Shukla"
             
        }

    }
}

// console.log(regularUser.fullName.userFullName.firstName)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4 =Object.assign({}, obj1 , obj2, obj3)


// console.log(obj4)
const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj5)


// console.log(tinder)
// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('isLoggedIn'))

const course= {
    name:"Ishaan",
    age:22,
    courseInstructor:"Hitesh"

}
// console.log(course.courseInstructor)
const {courseInstructor:Instructur} = course

console.log(Instructur)





