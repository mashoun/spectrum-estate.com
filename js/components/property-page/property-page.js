import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/property-page/property-page.html'),
    props: ['properties'],
    data() {
        return {
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
            myProperty: {}

        }
    },
    methods:{
        switchType(type){
            return type == 'Lands' || type == 'Warehouse'
        }
    },
    mounted() {

        const url = new URL(location.href)
        var id = url.searchParams.get('id')
        if(id){
            // console.log(id);
            this.properties.forEach(p => {
                if(p.id == id) {
                    this.myProperty = p
                }
            });
        }

        id = 0
        
    }
}