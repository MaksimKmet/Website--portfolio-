const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
console.log();

})

const div = document.createElement('div')
document.body.appendChild(div)
console.log(document.body);

div.style.display = 'flex'
div.style.justifyContent= 'center'

const redColor = document.createElement('rcol')
const blueColor = document.createElement('bcol')

const p = document.createTextNode('choose Your color')
div.appendChild(p)
//  I want to create next things
// 1. two choicer for choice
// 2. if you click change the color of button 
// 3. make a function with all of this stuff


// function createData(createElement) {
    

// console.log(p, redColor);
// }

// createData(redColor)