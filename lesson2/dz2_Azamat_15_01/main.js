//-- dz1 treugolnik--//\

var triangle = '*';
while (triangle.length <= 7){
    console.log(triangle +"\n");
    triangle+='*';
}

//--dz2 FizzBuzz--//
for (let i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 ===0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }

}