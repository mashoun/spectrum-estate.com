import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('./js/components/property-page/property-page.html'),
    // props: ['properties'],
    data() {
        return {
            store,
            utilities,
            initSwiper: {
                slidesPerView: 1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                // loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    // dynamicBullets: true,
                },
                spaceBetween: 10,
                // breakpoints: {
                //   640: {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                //   768: {
                //     slidesPerView: 2,
                //     spaceBetween: 15,
                //   },
                //   1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 20,
                //   },
                // }
            },
            propertyExist:true,
            invalidProperty:false

        }
    },
    computed:{
        myProperty(){

            const url = new URL(location.href)
            var id = url.searchParams.get('id')
            console.log(id);
            var properties = this.store.profile.properties
            if(id){
                for(let i = 0 ; i < properties.length ; i++){
                    if(properties[i].index == `${id}`){
                        console.log(properties[i]);
                        return properties[i]
                    }
                }
                
            }else this.invalidProperty = true
            return {
                "index": "0",
                "date": "",
                "id": "",
                "thumbnail": "",
                "images": "",
                "type": "",
                "location": "",
                "status": "",
                "price": "",
                "area": "",
                "amenities": "",
                "bedrooms": "",
                "bathrooms": "",
                "parking": ""
            }
        }
    },
    methods:{
        
    },
    mounted() {

        
        
    }
}