let text =  document.querySelector('#color')
const btn =  document.querySelector('#btn')
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let color = '#'

btn.addEventListener('click',function(){
    color = '#'
    for (let i= 0;i<6;++i){
        color +=hex[Math.floor(Math.random()*16)]
        
    }
    
    document.body.style.backgroundColor = color
    text.innerHTML = color

 
    
})