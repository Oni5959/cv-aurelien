let nav = document.getElementById("menu_nav");
console.log("test");


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // autoplay: {
  //   delay: 5000,
  // },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
    
    }
  });

function openNav(){
  nav.style.width = "100%";
  nav.style.display ="block";
}
function closeNav(){
  nav.style.width = "0";
  nav.style.display ="none";
}
