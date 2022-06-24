const getElement = document.querySelector('.counter');
let i =0;

function changeElement (click){
    if (click == plus){
        i+= 1;
    } else if (click == minus){
        i-= 1;
    } else if (click == reset){
        i = 0;
    } if (i < 0){
        i = 0;
    }
    getElement.innerHTML = i;
}

plus.onclick = () =>{
    changeElement(plus)
};

minus.onclick = () =>{
    changeElement(minus)
}

reset.onclick = () =>{
    changeElement(reset)
}


























