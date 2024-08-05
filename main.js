const div = document.getElementById("div")
const elP = document.createElement("p")
div.appendChild(elP)

const textEx = document.createTextNode("I'm a Max, Hi")
elP.appendChild(textEx)

function createElement(value, type) {

return document.createElement(`${type}`).appendChild(document.createTextNode(`${value}`))
}
console.log(createElement('hello', 'h1'))


