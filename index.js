/*const menu = document.querySelector('.menu')
const bar = document.querySelector('.bar')

bar.addEventListener('click', function(){
    menu.styles
})*/


const pizza = document.getElementById('pizza')
const salad = document.getElementById('salad')
const starter = document.getElementById('starter')

pizza.classList.add('active')
pizza.addEventListener('click',function(){
   
    pizza.classList.add('active')
    salad.classList.remove('active')
    starter.classList.remove('active')
    
    document.getElementById('pizzamenu').classList.remove('menuhider')
    document.getElementById('saladmenu').classList.add('menuhider')
    document.getElementById('startermenu').classList.add('menuhider')
    
})

salad.addEventListener('click',function(){

    pizza.classList.remove('active')
    salad.classList.add('active')
    starter.classList.remove('active')
    
    document.getElementById('pizzamenu').classList.add('menuhider')
    document.getElementById('saladmenu').classList.remove('menuhider')
    document.getElementById('startermenu').classList.add('menuhider')
    
})
starter.addEventListener('click',function(){

    pizza.classList.remove('active')
    salad.classList.remove('active')
    starter.classList.add('active')
  
    document.getElementById('pizzamenu').classList.add('menuhider')
    document.getElementById('saladmenu').classList.add('menuhider')
    document.getElementById('startermenu').classList.remove('menuhider')
    
})