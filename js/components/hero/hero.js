import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/hero/hero.html'),
    data(){
        return{
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
    }
}