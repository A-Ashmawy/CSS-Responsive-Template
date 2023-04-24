
// alert("hello ya m3lmeen el web");
window.addEventListener( 'scroll' , () => {
    document.querySelector('nav').classList.toggle('wscroll', window.scrollY > 100)
})

// show and hide faq answer

const faq=document.querySelectorAll('.faq-box ');
faq.forEach ( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // change icon
        const icon =faq.querySelector('.icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }

    })
})
// swiper js
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // when window width is >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }

    
});
