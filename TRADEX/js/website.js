//up-arrow
window.addEventListener('scroll',function(){
    var uparrow = this.document.querySelector('.up-arrow');
    (this.document.documentElement.scrollTop > 300)? uparrow.style.display="block" : uparrow.style.display="none";

}) 


//counters
window.addEventListener('scroll',function(){
    var counter1=document.getElementById('totalProjects')
    var i=0
    if(this.document.documentElement.scrollTop > 900 && this.document.documentElement.scrollTop < 1000) {
        var set =setInterval(()=>{
            counter1.innerText=i
            if(i==8000) clearInterval(set)
                i+=100
        },20)
    }
})
window.addEventListener('scroll',function(){
    var counter2=document.getElementById('wonAwards')
    var i=0
    if(this.document.documentElement.scrollTop > 900 && this.document.documentElement.scrollTop < 1000) {
        var set =setInterval(()=>{
            counter2.innerText=i
            if(i==810) clearInterval(set)
                i+=10
        },20)
    }
})
window.addEventListener('scroll',function(){
    var counter3=document.getElementById('happyClients')
    var i=0
    if(this.document.documentElement.scrollTop > 900 && this.document.documentElement.scrollTop < 1000) {
        var set =setInterval(()=>{
            counter3.innerText=i
            if(i==2000) clearInterval(set)
                i+=50
        },20)
    }
})
window.addEventListener('scroll',function(){
    var counter4=document.getElementById('yearsExperience')
    var i=0
    if(this.document.documentElement.scrollTop > 900 && this.document.documentElement.scrollTop < 1000) {
        var set =setInterval(()=>{
            counter4.innerText=i
            if(i==20) clearInterval(set)
                i++
        },50)
    }
})


//slider
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 20,
        nav: true,
        loop:true,
        navText: ["<i class='fa-solid fa-left-long bg-primary rounded-start-pill text-white me-2 width-40px'></i>", '<i class="fa-solid fa-right-long bg-primary rounded-end-pill text-white width-40px"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
              items : 1
    },
            // breakpoint from 768 up
            768: {
               items: 2
    }
        }
    });
  });


//form validation
function nameCheck(input){
    var inputValue=input.value
    if(inputValue.length<3) input.nextElementSibling.innerText='You must enter more than 3 characters'
    else input.nextElementSibling.innerText=''
}
function EmailCheck(input){
    var emailRegex= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ 
    var inputValue=input.value
    if(emailRegex.test(inputValue)) input.nextElementSibling.innerText=''
    else input.nextElementSibling.innerText='Enter a valid Email'
}
function subjectCheck(input){
    var inputValue=input.value
    if(inputValue.length<8) input.nextElementSibling.innerText='You must enter more than 8 characters'
    else input.nextElementSibling.innerText=''
}
var form = document.getElementById('form')

form.addEventListener('input',function(e){
    if(e.target.id=='userName') nameCheck(e.target)
        else if (e.target.id=='userEmail') EmailCheck(e.target)
            else if(e.target.id=='userSubject') subjectCheck(e.target)
})