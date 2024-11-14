// #003049 -blue


const firebaseConfig = {
    apiKey: "AIzaSyC5mirQ_S3ALwKsDRnb0RDuKYJ2xC8XISw",
    authDomain: "abhijeetportfolio-739.firebaseapp.com",
    databaseURL: "https://abhijeetportfolio-739-default-rtdb.firebaseio.com",
    projectId: "abhijeetportfolio-739",
    storageBucket: "abhijeetportfolio-739.appspot.com",
    messagingSenderId: "442796985979",
    appId: "1:442796985979:web:fec842ab71b2a1197a5cde"
  };

  //initialise the database
  firebase.initializeApp(firebaseConfig);
  
  //reference the database
  
  var AbhijeetPortfolioDB = firebase.database().ref('AbhijeetPortfolio');
  
  document.getElementById('contactForm').addEventListener('submit',submitForm);
  
  const button = document.querySelector("#message");
        button.addEventListener("click", (e) => {
          e.preventDefault;
          button.classList.add("animate");
          setTimeout(() => {
            button.classList.remove("animate");
          }, 600);
        });
  
  
  const downloadButton = document.querySelector("#download");
        downloadButton.addEventListener("click", (e) => {
          e.preventDefault;
          downloadButton.classList.add("animate");
          downloadButton.innerHTML = "Downloaded";
          setTimeout(()=>{
              downloadButton.innerHTML = "Download";
          },3000)
          setTimeout(() => {
              downloadButton.classList.remove("animate");
          }, 600);
        });
        
  // making the function 

  function submitForm(e){
    e.preventDefault();

    var username = getElememtValue('username');
    var  email = getElememtValue('email');
    var subject  = getElememtValue('subject');
    var  message = getElememtValue('message');

    // console.log(username,email,subject,message);
    saveMessages(username,email,subject,message);

    // show alert
    button.innerHTML = "Message Sent";
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
        button.innerHTML = "Send Message";
        document.querySelector(".alert").style.display = "none";
    }, 3000);
  }

//   to save the messages we create a function that stores data as a object

const saveMessages = (username,email,subject,message)=>{
    var newContactForm = AbhijeetPortfolioDB.push();
    
    newContactForm.set({
        
        username:username,
        email: email,
        subject: subject,
        message: message,
        
    })
}

//function to get the value

const getElememtValue = (id)=>{
    return document.getElementById(id).value;
}





$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front-End Developer", "C++ Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front-End Developer", "C++ Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});




const body = document.querySelector("body");

const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove",function(details){

    cursor.style.left = (details.x)+"px"
    cursor.style.top = (details.y)+"px"
    cursor.style.backgroundColor = 'white';
})


const text2 = document.querySelector('.text-2');

text2.addEventListener('mouseover',function(){
    cursor.style.height = '70px';
    cursor.style.width = "70px";
})

text2.addEventListener('mouseout',function(){
    cursor.style.height = '20px';
    cursor.style.width = '20px';
})


document.addEventListener("DOMContentLoaded", function() {
    // HTML progress bar
    document.querySelector('.skills-content .right .html::before').style.width = '90%';

    // CSS progress bar
    document.querySelector('.skills-content .right .css::before').style.width = '80%';

    // JavaScript progress bar
    document.querySelector('.skills-content .right .js::before').style.width = '70%';
});


