var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const hea = document.querySelectorAll(".heart");
  var non = document.querySelector(".no");

  
 

  

let arr = Array.from(hea);




arr.forEach((e)=>{
  e.addEventListener('click', ()=> {
    
    e.classList.toggle('active');
   

  
  })
})




const hambtn = document.querySelector('.ham')
const hammenu = document.querySelector('.ham-menu')

const span = document.querySelector('colo')

const i = document.querySelector('whi')

const pro = document.querySelector('profile')




hambtn.addEventListener('click', ()=> {
  hammenu.classList.toggle('active')
  hambtn.classList.toggle('active')

  
})












