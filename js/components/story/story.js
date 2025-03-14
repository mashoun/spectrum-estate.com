import utilities from "../../utilities.js"
import store from "../../store.js"
export default {
  template: await utilities.getPage('./js/components/story/story.html'),
  props: [],
  data() {
    return {
      store,
      utilities,
      storySwiper: {
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
          type: 'progressbar'
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        lazy: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    }
  },
  methods: {
    toggleStory() {
      this.store.storySidebar = !(this.store.storySidebar)
      if (!this.store.viewedStory) {
        this.store.viewedStory = !this.store.viewedStory
      }
    },

    slideNext() {
      var el = document.getElementById('storySwiper')
      // console.log(el.swiper);
      el.swiper.slideNext()
    },
    slidePrev() {
      var el = document.getElementById('storySwiper')
      // console.log(el.swiper);
      el.swiper.slidePrev()
    },
  }

}