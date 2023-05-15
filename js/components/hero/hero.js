import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    props:['imgs'],
    mounted(){
        var heroSwiper = document.getElementById('hero-swiper')
        Object.assign(heroSwiper,{
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            effect: window.innerWidth >= 768 ? 'fade' : 'cube',
            // grabCursor: true,
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            
        })
        heroSwiper.initialize()
    }
}