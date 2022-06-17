// console.log(document)
//
// const blocks =  document.getElementsByClassName('block');
//     // console.log(blocks)
//
// const block3 = document.getElementById('block3');
//     console.log(block3)
// // block3.className = 'changedClass'
// //
// block3.classList.add('changedClass')
// block3.classList.remove("block")
// //
//     console.log(block3.classList)
//
// block3.onclick = () => {
//     block3.classList.toggle('active')
// }
//
// const block = document.querySelector('.block')
// // console.log(block)
//
// const block2 =  document.querySelectorAll('.block')
// // console.log(block2)
// //
// const button = document.getElementById("button");
// const input = document.getElementById("input");
//
// button.onclick = () => {
//     const tag = document.createElement('div');
//     const deleteButton = document.createElement('button')
//     deleteButton.innerText = "delete"
//     deleteButton.onclick = () =>{
//         tag.remove()
//     }
//
//     tag.setAttribute('class', 'block');
//     tag.innerText = input.value
//     document.body.append(tag)
//     tag.append(deleteButton)
//     input.value = ''
// }

const documentElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

// console.log(bodyElement)

//
// const firstChildNodes = bodyElement.firstElementChild
// console.log(firstChildNodes)
//
// const lastElementCild = bodyElement.lastElementChild
// console.log(lastElementCild)

const previosElement = bodyElement.parentElement
// console.log(previosElement)

const firstChildren = previosElement.firstElementChild
// console.log(firstChildren)

const quarySelectorAll = bodyElement.querySelectorAll('.block')
// console.log(quarySelectorAll)

const getelementsByTaf = document.getElementsByTagName('div')
// console.log(getelementsByTaf)


const textElement = document.querySelector('.mean');
const textElementContent = textElement.textContent;
// console.log(textElementContent)

const newElement = document.createElement('div');
// console.log(newElement)

newElement.innerHTML = `Наслаждайся в жизнью`
// console.log(newElement)

const element = document.querySelector('.block');
// element.style.cssText = `
//     color: red;
//     font-style: italic;
//     font-weight: 600;
//     margin-bottom: 30px;
// `

element.style.color = 'yellowgreen'

const elementStyle = getComputedStyle(element);
// console.log(elementStyle.color)

