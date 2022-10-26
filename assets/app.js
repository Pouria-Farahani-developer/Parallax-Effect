const translate = document.querySelectorAll('.translate')
const big_title = document.querySelector('.big-title')
const header = document.querySelector('header')
const shadow = document.querySelector('.shadow')
const content = document.querySelector('.content')
const section = document.querySelector('section')
const image_container = document.querySelector('.img-container')
const opacity = document.querySelectorAll('.opacity')
const border = document.querySelector('.border')

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll',function(){
    let scroll = window.pageYOffset;
    let sectiony = section.getBoundingClientRect();
    
    translate.forEach(function(item){
        let speed = item.dataset.speed;
        item.style.transform = `translateY(${scroll*speed}px)`
    })

    opacity.forEach(function(index){
        index.style.opacity = scroll / (sectiony.top + section_height)
    })

    big_title.style.opacity = - scroll / (header_height/2) + 1;
    shadow.style.height = `${scroll*0.5 + 300}px`
    content.style.transform = `translatY(${scroll/(section_height+sectiony.top)* 50 - 50}px)`
    image_container.style.transform = `translatY(${scroll/(section_height+sectiony.top)* -50 + 50}px)`
    border.style.width = `${scroll / (sectiony.top  + section_height) * 30}%`

})