import utilities from "../../utilities.js"
import store from "../../store.js"
export default {
    template: await utilities.getPage('./js/components/hot-deals/hot-deals.html'),
    
    data(){
        return{
            block:false,
            swiperInit:{
                slidesPerView: 1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // loop:true,
                pagination:{
                    el:'.swiper-pagination',
                    // dynamicBullets: true,
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
            },
            store,
            utilities
        }
    },
    computed:{
        hotDeals(){
            return this.store.profile.properties.filter(p => {
                return p.isHotDeal
            })
        }
    }
}