//for of loop


const arr = [1,2,3,4,5]
for (const i  of arr) {
    console.log(i);  
}

const greeetings="Hello world"
for(const greet of greeetings){
    console.log(greet);    
}

//Maps 


const map =new Map()
map.set('a',1);
map.set('b',2);
map.set('c',2);


for(const [key,value] of map){
    console.log(key,':-',value);
}

// const myObject={
//     'game1':'NFS',
//     'game2':'GTA'
// }

// for(const [key,value] of myObject){
//     console.log(key,':-',value);     // Objects ar enot iteratable (Using for of loop)
// }







 





