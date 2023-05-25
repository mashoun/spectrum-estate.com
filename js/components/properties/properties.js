import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/properties/properties.html'),
    data(){
        return{
            swiperInit:{
                slidesPerView: 1,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop:true,
                pagination:{
                    el:'.swiper-pagination',
                    // dynamicBullets: true,
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }
            },
            properties:[
                {
                    location: 'Hamra',
                    area: '120',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Rent',
                    price: '1,500$',
                    image: 'https://picsum.photos/1080'
                },
                {
                    location: 'Achrafieh',
                    area: '220',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Sale',
                    price: '300,000$',
                    image: 'https://picsum.photos/1081'
                },
                {
                    location: 'Gemmayze',
                    area: '80',
                    beds: '1',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Rent',
                    price: '1,000$',
                    image: 'https://picsum.photos/1082'
                },
                {
                    location: 'Mar Mikhael',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '0',
                    type: 'Sale',
                    price: '200,000$',
                    image: 'https://picsum.photos/1083'
                },
                {
                    location: 'Verdun',
                    area: '200',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Sale',
                    price: '250,000$',
                    image: 'https://picsum.photos/1085'
                },
                {
                    location: 'Ras Beirut',
                    area: '180',
                    beds: '3',
                    bathrooms: '2',
                    parking: '1',
                    type: 'Rent',
                    price: '2,000$',
                    image: 'https://picsum.photos/1086'
                },
                {
                    location: 'Sodeco',
                    area: '250',
                    beds: '4',
                    bathrooms: '3',
                    parking: '2',
                    type: 'Rent',
                    price: '2,800$',
                    image: 'https://picsum.photos/1088'
                },
                {
                    location: 'Raouche',
                    area: '150',
                    beds: '2',
                    bathrooms: '1',
                    parking: '1',
                    type: 'Sale',
                    price: '180,000$',
                    image: 'https://picsum.photos/1089'
                },
            ]
        }
    }
}