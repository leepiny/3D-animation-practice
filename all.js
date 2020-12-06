const card = document.querySelector('.card');
const container = document.querySelector('.container');

const shoes = document.querySelector('.card-shoes-photo');
const title = document.querySelector('.title');
const text = document.querySelector('.introduction');
const size = document.querySelector('.shoes-size');

container.addEventListener('mousemove',(e =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}))

//animation In
container.addEventListener('mouseenter',(e =>{
    card.style.transition = 'none';

    //item popUp
    shoes.style.transform = 'translateZ(130px) rotateZ(-20deg)';
    title.style.transform = 'translateZ(110px)';
    text.style.transform = 'translateZ(90px)';
    size.style.transform = 'translateZ(70px)';
}))

// animation Out
container.addEventListener('mouseleave',(e =>{
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    //item popBack
    shoes.style.transform = 'translateZ(0) rotateZ(0)';
    title.style.transform = 'translateZ(0px)';
    text.style.transform = 'translateZ(0px)';
    size.style.transform = 'translateZ(0px)';
}))

//phone Animation

window.addEventListener('deviceorientation',(e =>{
    // let alpha = e.alpha;
    // let beta = e.beta;
    // let gamma = e.gamma;
    e.gamma = (window.innerWidth / 2 - e.pageX) / 20;
    e.beta = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

     //item popUp
     shoes.style.transform = 'translateZ(130px) rotateZ(-20deg)';
     title.style.transform = 'translateZ(110px)';
     text.style.transform = 'translateZ(90px)';
     size.style.transform = 'translateZ(70px)';
    
}))