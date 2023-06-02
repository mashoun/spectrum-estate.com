import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    data(){
        return{
            store,
            slides:[
                './img/day3a-min.jpg',
                './img/door-min.jpg',
                './img/sama-min.jpg',
            ],
            swiperInit:{
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop:true,
                effect:'fade',
                grabCursor: true,
                cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
            }
        }
    },
    mounted(){
        document.addEventListener('scroll',e => {
            // console.log(window.scrollY);
            if(window.scrollY >= 10) {
                document.querySelector('header').classList.add('bg-dark')
            }else document.querySelector('header').classList.remove('bg-dark')
        })
    }
}