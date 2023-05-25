import utilities from "../../utilities.js"
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
export default {
    template: await utilities.getPage('./js/components/swiper/swiper.html'),
    props: ['id','init','overflow'],
    mounted() {
        new Swiper(`.${this.id}`,this.init)
    }
}