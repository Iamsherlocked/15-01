const counter = document.querySelector('.counter');
let count = 0;

function changeCounter (button) {
    if (button == plus) {
        count += 1;
    } else if (button == minus){
        count -= 1;
    } else if (button == reset){
        count = 0;
    }
    counter.innerHTML = count;
}
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
plus.onclick = () => {
    changeCounter(plus)
}

minus.onclick = () => {
    changeCounter(minus)
}

reset.onclick = () =>{
    changeCounter(reset)
}






