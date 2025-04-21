var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });








  
const hambtn = document.querySelector('.ham')
const hammenu = document.querySelector('.ham-menu')

const span = document.querySelector('colo')

const i = document.querySelector('whi')

const pro = document.querySelector('profile')




hambtn.addEventListener('click', ()=> {
  hammenu.classList.toggle('active')
  hambtn.classList.toggle('active')

  
})


const remove = document.querySelector('#RemoveAttribute');

const more = document.querySelector('.more')

const MoreItems = document.querySelector('.afterbox')


const less = document.querySelector('.less')

remove.removeAttribute('href');

console.log(remove);



more.addEventListener('click' , ()=> {
  MoreItems.classList.toggle('active')
  less.classList.toggle('active')
  
})














  const hea = document.querySelectorAll(".heart");
  var non = document.querySelector(".no");


  let popfav = document.querySelector('.popupfav')

  



  
 

  

let arr = Array.from(hea);




arr.forEach((e)=>{

  e.setAttribute('data-added','false')
 

  e.addEventListener('click', (event)=> {

    e.classList.toggle('active');

    const button = event.currentTarget;

    const product = button.closest('.box')
     const productName = product.querySelector('h2').innerText;

     const isadded = button.getAttribute('data-added')

     if (isadded === "false") {
        popfav.innerHTML= `<p> <span>${productName}</span> added to Favorite's </p>`
        button.setAttribute('data-added', 'true')
     }

     else {
      popfav.innerHTML = `<p> <span>${productName}</span> removed from Favorite's </p>`
      button.setAttribute('data-added',"false")
     }

    

    popfav.classList.add('active')

    setTimeout(() => {
      popfav.classList.remove('active')
    }, 2000);

    
  })

})






// <---------cartbtn---------->


// const CartBtnNode = document.querySelectorAll('.cart');
// const PopupCart = document.querySelector('.popupcart')

// const CartBtnArr = Array.from(CartBtnNode)

// CartBtnArr.forEach((button)=>{
//   button.setAttribute('data-added','false')

//   button.addEventListener('click',(event)=> {

//     let btn = event.currentTarget;

//     console.log(btn);

//     let product = btn.closest('.box')

//     let productName = product.querySelector('h2').innerText;

//     let isadded = btn.getAttribute('data-added')

//     if (isadded === 'false') {

//       PopupCart.innerHTML = `<p> <span>${productName}</span> added to Cart </p>`
//       btn.setAttribute('data-added','true')
      
//     }


//     else {
//       PopupCart.innerHTML = `<p> <span>${productName}</span> removed from Cart </p>`
//       btn.setAttribute('data-added','false')
//     }

    
//     PopupCart.classList.add('active')

//     setTimeout(() => {
//       PopupCart.classList.remove('active')
//     }, 2000);




//   })


// })



const ShowCartBox = document.querySelectorAll('.cartbox')

const CartBox = document.querySelector('.livecart')

const nonebtn = document.querySelector('.displaynone')


const ArrOfCartbox = Array.from(ShowCartBox);

ArrOfCartbox.forEach((btn)=> {
  btn.addEventListener('click', () => {
   
   CartBox.classList.toggle('show')
  })
})












const addli = document.querySelector('.appendli')

const CartBtnNode = document.querySelectorAll('.cart'); 

const CartArr = Array.from(CartBtnNode)


CartArr.forEach((button)=>{
  button.addEventListener('click', (event)=>{

    const btn = event.currentTarget;


    let product = btn.closest('.box');

    let productName = product.querySelector('h2').innerText;
    let productPrice = product.querySelector('h3').innerText;
    let productImage = product.querySelector('img').src;
   

    const alreadyincart = [...addli.children].some((li)=>{
      const name = li.querySelector('.item-name')?.innerText;

      return name === productName;
    })


    


    
    
    if (alreadyincart) {
      alert(`${productName} is already in the Cart`)
      return;
    }
    
    let li = document.createElement('li')
    li.classList.add('cart-item')


    const removebtn = document.createElement('button')

    removebtn.classList.add('remove-btn')

    removebtn.innerText = "+"

    removebtn.style.color = "black"
    removebtn.style.position = "absolute"
    removebtn.style.top = "2%"
    removebtn.style.left = "2%"
    removebtn.style.fontSize = "1.8rem"
    removebtn.style.fontFamily = "arial"
    removebtn.style.fontWeight = "bold"
    removebtn.style.border = "none"
    removebtn.style.outline = "none"
    removebtn.style.backgroundColor = "transparent"
    removebtn.style.transform = "rotate(45deg)"


    removebtn.addEventListener('click',()=> {
      li.remove();
    })












    

    let image = document.createElement('img')

    image.src = productImage
    image.alt = productName
    
    


    let h2 = document.createElement('h2')
    h2.classList.add('item-name')
    h2.innerText = productName
     
    let h3 = document.createElement('h3')
    h3.innerText = productPrice



    

    li.appendChild(removebtn)
    li.appendChild(image)
    li.appendChild(h2)
    li.appendChild(h3)


    addli.appendChild(li)
    




  });
})




































