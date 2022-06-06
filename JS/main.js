// Element scroll ease in 


// Color active navigation link
var isactive = document.querySelectorAll('.isactive');
var nav = document.querySelectorAll('.landing-viewport .container .nav-bar ul li .nav-link');

isactive.forEach(item => {
    item.addEventListener('focus', e => {
        console.log(item);
        console.log(e.target);
    })
})

// Display and hide aside nav-item for mobile
var showAside = document.querySelector('.bars');

showAside.addEventListener('click', e=> {
    document.querySelector('.side-navbar').classList.remove('hideaside');
    
})

var hideAside = document.querySelector('.side-navbar img');

hideAside.addEventListener('click', e => {
    document.querySelector('.side-navbar').classList.add('hideaside');
})

var goToSelected = document.querySelectorAll('.aside-item a');

goToSelected.forEach(item => {
    item.addEventListener('click', e => {
        document.querySelector('.side-navbar').classList.add('show');
    })
})

// Mousemove moon animation 
var move = document.querySelector('.landing-viewport');

move.addEventListener('mousemove', e =>{
    document.querySelectorAll('.landing-viewport .container .mousemove').forEach(mv => {
        const speed = mv.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;
    
        mv.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
})

var move2 = document.querySelector('.me');

move2.addEventListener('mousemove', e=> {
    const item = document.querySelector('.lg-moon');
    const speed2 = item.getAttribute('data-speed');

    const x = (window.innerHeight - e.pageX*speed2)/100;
    const y = (window.innerWidth- e.pageY*speed2)/100;

    item.style.transform =  `translateX(${x}px) translateY(${y}px)`;
})

//Expand contact to write message.
var unhideTrigger = document.querySelector('.expand');
var expand = document.querySelectorAll('.show');

unhideTrigger.addEventListener('click', e=>{
    expand.forEach(item => {
        if ('side-navbar' in item.classList){
            pass;
        }else {
            item.classList.remove('show');
        }
    })
    unhideTrigger.classList.add('show');
})

var hideTrigger = document.querySelector('.btn-2');

hideTrigger.addEventListener('click', e => {
    expand.forEach(item => {
        item.classList.add('show');
    })
    unhideTrigger.classList.remove('show');
})

// load more project eventhandler

var loadMore = document.getElementById("more");
var moreItem = document.querySelectorAll('.case-study .container .more');
var lessItem = document.getElementById('less');

loadMore.addEventListener('click', e => {
    moreItem.forEach(item => {
        item.classList.remove('more');
    })
    loadMore.classList.add('more');
    lessItem.classList.remove('more');
})

lessItem.addEventListener('click', e => {
    moreItem.forEach(item => {
        item.classList.add('more');
    })
    loadMore.classList.remove('more');
    lessItem.classList.add('more');
})

//Switch between services
var uiux = document.querySelector('.uiux');
var frontend = document.querySelector('.frontend');
var backend = document.querySelector('.backend');

document.querySelector('.circle-1').addEventListener('click', e => {
    uiux.classList.remove('hideservice');
    uiux.classList.add('active-circle');

    frontend.classList.add('hideservice');
    frontend.classList.remove('active-circle');

    backend.classList.add('hideservice');
    backend.classList.remove('active-circle');
})
document.querySelector('.circle-2').addEventListener('click', e => {
    frontend.classList.remove('hideservice');
    frontend.classList.add('active-circle');

    uiux.classList.add('hideservice');
    uiux.classList.remove('active-circle');

    backend.classList.add('hideservice');
    backend.classList.remove('active-circle');
})
document.querySelector('.circle-3').addEventListener('click', e => {
    backend.classList.remove('hideservice');
    backend.classList.add('active-circle');

    uiux.classList.add('hideservice');
    uiux.classList.remove('active-circle');

    frontend.classList.add('hideservice');
    frontend.classList.remove('active-circle');
})

// Automatic copyright date updator

var date = new Date();

document.getElementById('date').innerHTML = date.getFullYear();
