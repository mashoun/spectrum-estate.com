import swiper from './components/swiper/swiper.js'
app.component('swiper-container',swiper)


const app = Vue.createApp({
    data(){
        return{
            title:'Spectrum',
            heroSwiperInit:{
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    }
})
app.mount('#app')