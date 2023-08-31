// console.log("Hello World")
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange'];
let text =  document.querySelector('#color')
const btn =  document.querySelector('#btn')
btn.addEventListener('click',()=>{
    const randomNumber = Math.floor(Math.random()*colors.length)
    text.innerHTML = colors[randomNumber]
    document.body.style.backgroundColor = colors[randomNumber]

})
