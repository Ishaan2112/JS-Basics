const user ={
    username: "Ishaan",
    price: 999,

    welcomemessge:function(){
        // console.log(` ${this.username}, Welcome to website`)
        console.log(this)
    }

}

// user.welcomemessge()
// user.username="Hitesh"
// user.welcomemessge()


function chai(){
    let username= "Ishaan"
    console.log(this.username)
}

// chai() // can't access this in function , accessible to objects only


const chai= () => {
    let username= "Ishaan"
    console.log(this.username)
}

chai()
