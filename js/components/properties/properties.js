import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/properties/properties.html'),
    props:['properties'],
    mounted(){
        var heroSwiper = document.getElementById('properties-swiper')
        Object.assign(heroSwiper,{
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            
            spaceBetween: 20,
            breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }
            
        })
        heroSwiper.initialize()
    }
}