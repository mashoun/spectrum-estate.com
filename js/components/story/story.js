import utilities from "../../utilities.js"
import store from "../../store.js"
export default {
    template: await utilities.getPage('./js/components/story/story.html'),
    props:[],
    data(){
        return{
            store,
            utilities,
            storySwiper:{
                effect: 'cube',
                grabCursor: true,
                cubeEffect: {
                  shadow: false,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                },
                pagination: {
                  el: '.swiper-pagination',
                  type:'progressbar'
                },
            }
        }
    },
    methods:{
      toggleStory(){
        this.store.storySidebar = !(this.store.storySidebar)
        if(!this.store.viewedStory){
          this.store.viewedStory = !this.store.viewedStory
        }
      }
    }
    
}