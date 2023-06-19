import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/story/story.html'),
    props:[],
    data(){
        return{
            openStory:false,
            storySwiper:{
                effect: 'cube',
                grabCursor: true,
                cubeEffect: {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
                pagination: {
                  el: '.swiper-pagination',
                },
            }
        }
    }
    
}