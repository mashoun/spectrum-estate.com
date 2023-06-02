import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/agents/agents.html'),
    data() {
        return {
            store,
            agentsSwiper:{
                slidesPerView: 1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // loop:true,
                pagination:{
                    el:'.swiper-pagination'
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
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }
            },

        }
    }
}