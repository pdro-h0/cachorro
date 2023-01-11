/* SELECAO DE ELEMENTOS================== */
const menuMobileHambur = document.querySelector('.menu-mobile')
const menuMobileX = document.querySelector('.menu-mobile-x')
const menuMobileOpen = document.querySelector('.mobile')
const menuLinks = document.querySelectorAll(".menu-open  li a")
const bodyMenuMobile = document.querySelector('.menu-open')
const header = document.querySelector('header')
const headerHeith = header.offsetHeight

menuLinks.forEach((e) =>{
    e.addEventListener('click', ()=>{
        setTimeout(() => {
            menuMobileOpen.style.right = '-100vw'
        }, 200);
    })
})

menuMobileHambur.addEventListener('click', ()=>{
    menuMobileOpen.style.right = 0

    setTimeout(() => {
        bodyMenuMobile.style.opacity = 1
    }, 10);
})

menuMobileX.addEventListener('click', () =>{
    menuMobileOpen.style.right = '-100vw'

    setTimeout(() => {
        bodyMenuMobile.style.opacity = 0
    }, 10);
})


window.addEventListener('scroll', headerScroll)




function headerScroll(){
    if(window.scrollY > headerHeith){
        header.classList.add('menu-scroll')
    }else{
        header.classList.remove('menu-scroll')
    }

}
























/* SWIPER */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        750: {
            slidesPerView: 2,
            setWrapperSize: true
        },
        1024: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
})
