const myObject={
    js:'javascript',
    cpp:'C++',
    py:'Python'
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","cpp","rb","py"]

for(const key in programming){
    console.log(programming[key]);
}



// For each loop