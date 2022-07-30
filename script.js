let menu = document.querySelector(".fa-bars");
let header = document.getElementById("header")
let navbar = document.getElementById("navbar");
let sticky = header.offsetTop;

menu.addEventListener('click', function(){
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("nav_toggle")
});

window.addEventListener("scroll", function(){
    menu.classList.remove("fa-times")
    navbar.classList.remove("nav_toggle")
});

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset >= 30){
        header.classList.add("sticky")
    }else{
        header.classList.remove("sticky")
    }
});

$(document).ready(function(){
    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next(".accordion-body").slideDown();
    })
});