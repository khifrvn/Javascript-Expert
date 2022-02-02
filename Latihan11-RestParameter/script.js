// Rest Parameter

function myFunc(a,b,...values){
    //return console.log(a, b, ...values);
    return Array.from(a, b, ...values);
}

console.log(myFunc(1,2,4,56,3,2,2))